var $VirtualHbbtv = function() {
    function _0x5772d0() {
        var _0x28bea4 = !![]
          , _0x2950f6 = document['querySelector']('#appmgr')
          , _0x4908d5 = !!(typeof _0x2950f6['getOwnerApplication'] === 'function' && _0x2950f6['getOwnerApplication'](document));
        HBBTV_EMULATION = !_0x4908d5;
        if (!_0x4908d5) {
            println('Emulating\x20HBBTV\x20layer...', 'fne');
            var _0x546077 = document['querySelector']('object[type=\x22application/oipfConfiguration\x22]');
            _0x546077['configuration'] = {
                'subtitlesEnabled': !![],
                'preferredSubtitleLanguage': 'ITA'
            },
            setTimeout(function() {
                var _0x2812bd = document['querySelector']('object[type=\x22application/oipfApplicationManager\x22]');
                _0x2812bd['getOwnerApplication'] = function() {
                    return {
                        'createApplication': function(_0x40dd39, _0x4a1b31) {
                            return println('createApplication(' + _0x40dd39 + ',\x20' + _0x4a1b31 + ')', 'inf'),
                            setTimeout(function() {
                                window['open'](_0x40dd39);
                            }, 0x0),
                            {};
                        },
                        'destroyApplication': function() {
                            println('destroyApplication()', 'inf'),
                            document['body']['innerHTML'] = '<div\x20style=\x27color:white;\x20background:red;\x20font-size:\x2035px\x27>&nbsp;&nbsp;APP\x20DESTROYED\x20BY\x20destroyApplication&nbsp;&nbsp;<div>',
                            _0x28bea4 && location['reload']();
                        }
                    };
                }
                ;
            }, 0x0);
            var _0x27b26c = document['querySelector']('object[type=\x22video/broadcast\x22]')
              , _0x27b85a = {
                'rai1': new $channel('Rai\x201\x20HD',0x217c,0x2,0x41f),
                'rai1hd': new $channel('Rai\x201\x20HD',0x217c,0x71,0x44d),
                'rai2': new $channel('Rai\x202\x20HD',0x217c,0x71,0x44e),
                'rai2hd': new $channel('Rai\x202\x20HD',0x217c,0x71,0x44e),
                'rai3': new $channel('Rai\x203\x20HD',0x217c,0x2,0x41b),
                'rai3hd': new $channel('Rai\x203\x20HD',0x217c,0x2,0x41b),
                'rai4': new $channel('Rai\x204',0x217c,0x2,0x420),
                'rai4hd': new $channel('Rai\x204\x20HD',0x217c,0x2,0x420),
                'rai5': new $channel('Rai\x205',0x217c,0x2,0x421),
                'rainews24': new $channel('Rai\x20News\x2024',0x217c,0x71,0x44f),
                'raimovie': new $channel('Rai\x20Movie',0x217c,0x1,0x3ea),
                'raipremium': new $channel('Rai\x20Premium\x20HD',0x217c,0x1,0x3ee),
                'raipremiumhd': new $channel('Rai\x20Premium\x20HD',0x217c,0x1,0x3ee),
                'raigulp': new $channel('Rai\x20Gulp',0x217c,0x1,0x3ec),
                'raiyoyo': new $channel('Rai\x20YoYo',0x217c,0x1,0x3ed),
                'raistoria': new $channel('Rai\x20Storia',0x217c,0x1,0x3ef),
                'raisport+hd': new $channel('Rai\x20Sport\x20+\x20HD',0x217c,0x1,0x3e9),
                'raisport': new $channel('Rai\x20Sport',0x217c,0x2,0x41d),
                'raiscuola': new $channel('Rai\x20Scuola',0x217c,0x2,0x41e),
                'rairadio1': new $channel('Rai\x20Radio\x201',0x217c,0x71,0x451),
                'rairadio2': new $channel('Rai\x20Radio\x202',0x217c,0x71,0x452),
                'rairadio3': new $channel('Rai\x20Radio\x203',0x217c,0x71,0x453),
                'raigrparlamento': new $channel('Rai\x20GrParlamento',0x13e,0x2,0x217c),
                'rairadiotuttaitaliana': new $channel('Rai\x20Radio\x20Tutta\x20Italiana',0x13e,0x2,0x2182),
                'rairadiolive': new $channel('Rai\x20Radio\x20Live',0x13e,0x2,0x2184),
                'rairadiokids': new $channel('Rai\x20Radio\x20Kids',0x13e,0x2,0x218d),
                'rairadiotechete\x27': new $channel('Rai\x20Radio\x20Techete\x27',0x13e,0x2,0x2183),
                'raiisoradio': new $channel('Rai\x20Isoradio',0x13e,0x2,0x217d),
                'rairadio1sport': new $channel('Rai\x20Radio\x201\x20Sport',0x13e,0x2,0x218e),
                'rairadio2indie': new $channel('Rai\x20Radio\x202\x20Indie',0x13e,0x2,0x218f),
                'rairadioclassica': new $channel('Rai\x20Radio\x20Classica',0x13e,0x2,0x217a)
            }
              , _0x3d11cc = _0x27b85a[CHANNEL['toLowerCase']()['replace'](/ /gm, '')];
            if (!_0x3d11cc)
                _0x3d11cc = new $channel('Rai\x201',0x13e,0x1,0xd49);
            _0x27b26c['currentChannel'] = _0x3d11cc,
            println('📺\x20STARTING\x20CHANNEL:\x20' + _0x3d11cc['name']);
            var _0xaa3ef5 = new chList();
            _0x27b26c['getChannelConfig'] = function() {
                return {
                    'channelList': _0xaa3ef5
                };
            }
            ,
            _0x27b26c['setChannel'] = function(_0x39d05a, _0x1809ff, _0x1a0e2e) {
                $StreamingService['setChannel'](_0x39d05a),
                _0x27b26c['currentChannel'] = _0x39d05a;
            }
            ,
            _0x27b26c['onChannelChangeSucceeded'] = function(_0x48bd5a) {
                println('onChannelChangeSucceeded(' + (_0x48bd5a && _0x48bd5a['name']) + ')');
            }
            ;
            var _0x367f5f = {
                '_currentPointer': 0x0,
                '_comps': [new $audioComponent('1','650',0x1,'MPEG1_L2',![],'ITA',![],'2'), new $audioComponent('2','694',0x1,'MPEG1_L2',![],'OTH',![],'2'), new $audioComponent('3','699',0x1,'MPEG1_L2',![],'ENG',![],'2')]
            }
              , _0x470c66 = {
                '_currentPointer': 0x0,
                '_comps': [new $subtitleComponent('255','576',0x2,'EBU-SUBT',![],'ITA',![]), new $subtitleComponent('255','576',0x2,'EBU-SUBT',![],'ENG',![])]
            };
            _0x27b26c['getComponents'] = function(_0x191cb3) {
                switch (_0x191cb3) {
                case 0x0:
                    return undefined;
                case 0x1:
                    return _0x367f5f['_comps'];
                case 0x2:
                    return _0x470c66['_comps'];
                }
            }
            ,
            _0x27b26c['getCurrentActiveComponents'] = function(_0x2e6fd5) {
                switch (_0x2e6fd5) {
                case 0x0:
                    return undefined;
                case 0x1:
                    return [_0x367f5f['_comps'][_0x367f5f['_currentPointer']]];
                case 0x2:
                    return [_0x470c66['_comps'][_0x470c66['_currentPointer']]];
                }
            }
            ,
            _0x27b26c['unselectComponent'] = function(_0x3b749a) {}
            ,
            _0x27b26c['selectComponent'] = function(_0x42c595) {
                switch (_0x42c595['type']) {
                case 0x0:
                    break;
                case 0x1:
                    var _0x46dba0 = _0x367f5f['_comps']['indexOf'](_0x42c595);
                    if (_0x46dba0 !== -0x1)
                        _0x367f5f['_currentPointer'] = _0x46dba0,
                        _0x27b26c['onSelectedComponentChanged'](0x1);
                    else
                        println('TODO\x20-\x20selectComponent\x20not\x20implemented\x20for\x20this\x20case...', 'err');
                    break;
                case 0x2:
                    var _0x250d68 = _0x470c66['_comps']['indexOf'](_0x42c595);
                    if (_0x250d68 !== -0x1)
                        _0x470c66['_currentPointer'] = _0x250d68,
                        _0x27b26c['onSelectedComponentChanged'](0x2);
                    else
                        println('TODO\x20-\x20selectComponent\x20not\x20implemented\x20for\x20this\x20case...', 'err');
                    break;
                }
            }
            ,
            _0x27b26c['onSelectedComponentChanged'] = function(_0x9c1ef2) {
                println('onSelectedComponentChanged(' + _0x9c1ef2 + ')');
            }
            ,
            _0x27b26c['COMPONENT_TYPE_VIDEO'] = 0x0,
            _0x27b26c['COMPONENT_TYPE_AUDIO'] = 0x1,
            _0x27b26c['COMPONENT_TYPE_SUBTITLE'] = 0x2,
            $VideoStreamer['getInstance']()['addOkEventListener'](function() {
                println('_______________OK', 'err');
            }),
            $VideoStreamer['getInstance']()['addErrorEventListener'](function() {
                println('_______________ERROR', 'err');
            }),
            $VideoStreamer['getInstance']()['addClosedEventListener'](function() {
                println('_______________CLOSED', 'err');
            }),
            $VideoStreamer['getInstance']()['addReadyEventListener'](function() {
                var _0x528930 = document['querySelector']('object[type=\x22video/broadcast\x22]');
                println('_______________READY\x20' + _0x528930['currentChannel']['name'], 'err'),
                _0x528930['onChannelChangeSucceeded'](_0x528930['currentChannel']);
            }),
            $VideoStreamer['getInstance']()['addDvrEventListener'](function() {
                println('_______________DVR', 'err');
            });
        }
    }
    return _0x5772d0['prototype']['constructor'] = _0x5772d0,
    _0x5772d0;
}()
  , $channel = function() {
    function _0x55c7d3(_0x564f68, _0x318245, _0x27aea4, _0x3ad944) {
        this['name'] = _0x564f68,
        this['onid'] = _0x318245,
        this['tsid'] = _0x27aea4,
        this['sid'] = _0x3ad944;
    }
    return _0x55c7d3['prototype']['constructor'] = _0x55c7d3,
    _0x55c7d3;
}()
  , $audioComponent = function() {
    function _0x56574a(_0x26b17e, _0x4c4966, _0x12f6c0, _0x16735f, _0x57b0ff, _0x5c3ab8, _0x3bc316, _0x28d276) {
        this['componentTag'] = _0x26b17e,
        this['pid'] = _0x4c4966,
        this['type'] = _0x12f6c0,
        this['encoding'] = _0x16735f,
        this['encrypted'] = _0x57b0ff,
        this['language'] = _0x5c3ab8,
        this['audioDescription'] = _0x3bc316,
        this['audioChannels'] = _0x28d276;
    }
    return _0x56574a['prototype']['constructor'] = _0x56574a,
    _0x56574a;
}()
  , $subtitleComponent = function() {
    function _0x52eedb(_0x50c7c7, _0xcf97d0, _0xbb29cf, _0x26c590, _0x311eb4, _0x47059d, _0x309ad9) {
        this['componentTag'] = _0x50c7c7,
        this['pid'] = _0xcf97d0,
        this['type'] = _0xbb29cf,
        this['encoding'] = _0x26c590,
        this['encrypted'] = _0x311eb4,
        this['language'] = _0x47059d,
        this['hearingImpaired'] = _0x309ad9;
    }
    return _0x52eedb['prototype']['constructor'] = _0x52eedb,
    _0x52eedb;
}()
  , chList = function() {
    function _0x13f808() {
        var _0xa5cfbf = [];
        this['getChannelByTriplet'] = function(_0xa5c04c, _0x1f4902, _0x32f949, _0x132f94) {
            for (var _0x30a645 = 0x0; _0x30a645 < _0xa5cfbf['length']; _0x30a645++) {
                if (_0xa5c04c === _0xa5cfbf[_0x30a645]['onid'] && _0x1f4902 === _0xa5cfbf[_0x30a645]['tsid'] && _0x32f949 === _0xa5cfbf[_0x30a645]['sid'])
                    return _0xa5cfbf[_0x30a645];
            }
            return null;
        }
        ,
        this['clear'] = function() {
            _0xa5cfbf = [];
        }
        ,
        this['addCh'] = function(_0x765e87, _0x31395c, _0x17f45e, _0x4ddf3d) {
            var _0x2e47cb = new $channel(_0x765e87,_0x31395c,_0x17f45e,_0x4ddf3d);
            _0xa5cfbf['push'](_0x2e47cb);
            var _0x15d3b3 = _0x765e87['toLowerCase']()['replace'](/ /gm, '')
              , _0x3d3bad = $VideoManager['getInstance']()['_video']['currentChannel']['name']['toLowerCase']()['replace'](/ /gm, '');
            if (_0x3d3bad === _0x15d3b3) {
                var _0x967e5c = document['querySelector']('object[type=\x22video/broadcast\x22]');
                _0x967e5c['currentChannel'] = _0x2e47cb;
            }
        }
        ,
        this['setArtifact'] = function(_0x1fdfc1, _0x8347eb, _0x573a76, _0x306d28) {
            this['getChannelByTriplet'](_0x1fdfc1, _0x8347eb, _0x573a76)['artifact'] = _0x306d28;
        }
        ,
        this['chReset'] = function(_0x533cb2) {
            var _0x56b365 = this['getChannelByTriplet'](_0x533cb2['onid'], _0x533cb2['tsid'], _0x533cb2['sid'])
              , _0x5f2e53 = _0xa5cfbf['indexOf'](_0x56b365);
            _0xa5cfbf[_0x5f2e53] = _0x533cb2;
        }
        ,
        this['chRemove'] = function(_0x746ffc) {
            var _0x5dec25 = _0xa5cfbf['indexOf'](_0x746ffc);
            return _0xa5cfbf['splice'](_0x5dec25, 0x1),
            _0x5dec25;
        }
        ,
        this['toArray'] = function() {
            return _0xa5cfbf;
        }
        ;
    }
    return _0x13f808['prototype']['constructor'] = _0x13f808,
    _0x13f808;
}()
  , $VideoStreamer = function() {
    function _0x41db06() {
        var _0x3695f6 = document['querySelector']('#appmgr')
          , _0x3230dd = !!(typeof _0x3695f6['getOwnerApplication'] === 'function' && _0x3695f6['getOwnerApplication'](document));
        this['restart'] = function() {
            var _0x5f55ab = document['querySelector']('object[type=\x22video/broadcast\x22]');
            println('[STREAMER]\x20RESTART\x20' + _0x5f55ab['currentChannel']['name']),
            $HubServices['getChannelByName'](_0x5f55ab['currentChannel']['name'], function(_0x259923) {
                var _0x326513 = $Scene['switch2']($ScenePlayer);
                _0x326513['setData'](_0x259923, 'restart');
            });
        }
        ,
        this['play'] = function() {}
        ,
        this['playUrl'] = function(_0x24f0a5) {}
        ,
        this['setChannel'] = function() {}
        ,
        this['dispose'] = function() {}
        ,
        this['pause'] = function() {}
        ,
        this['resume'] = function() {}
        ,
        this['addOkEventListener'] = function() {}
        ,
        this['removeOkEventListener'] = function() {}
        ,
        this['addReadyEventListener'] = function() {}
        ,
        this['removeReadyEventListener'] = function() {}
        ,
        this['addErrorEventListener'] = function() {}
        ,
        this['removeErrorEventListener'] = function() {}
        ,
        this['addClosedEventListener'] = function() {}
        ,
        this['removeClosedEventListener'] = function() {}
        ,
        this['addDvrEventListener'] = function() {}
        ,
        this['removeDvrEventListener'] = function() {}
        ;
    }
    return {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x41db06()),
            this['instance'];
        }
    };
}()
  , $DataLoader = function() {
    function _0xb6b0d5(_0x1ff07e) {
        this['instanceReadyListener'] = [];
        if (_0x1ff07e)
            this['instanceReadyListener']['push'](_0x1ff07e);
        function _0x136df1() {
            println('🟢\x20Data\x20Loader');
            for (var _0x1b3625 = 0x0; _0x1b3625 < this['instanceReadyListener']['length']; _0x1b3625++) {
                this['instanceReadyListener'][_0x1b3625]();
            }
        }
        var _0x63261 = undefined;
        Object['defineProperty'](this, '_svgXml', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x63261;
            }
        }),
        Object['defineProperty'](this, '_ready', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return !!_0x63261;
            }
        });
        var _0x825d09 = undefined;
        if (SVG0_FILE) {
            _0x825d09 = $StorageManager['getInstance']()['read'](SVG0_FILE),
            _0x63261 = _0x825d09 ? new DOMParser()['parseFromString'](_0x825d09, 'text/xml') : undefined;
            if (_0x63261) {
                var _0x5e3dc0 = _0x63261['getElementsByTagName']('svgResources')[0x0]['getAttribute']('expirationTime');
                if (_0x5e3dc0) {
                    _0x5e3dc0 = parseInt(_0x5e3dc0);
                    if (Date['now']() > _0x5e3dc0)
                        println('SVG0\x20cache\x20retrieved\x20but\x20expired\x20=>\x20cache\x20abort', 'fne'),
                        $StorageManager['getInstance']()['delete'](SVG0_FILE),
                        _0x63261 = undefined;
                    else {
                        var _0x734392 = _0x5e3dc0 - Date['now'](), _0x4c6b13 = Math['floor'](_0x734392 / 0x3e8), _0x2207a7, _0x3c8269;
                        _0x3c8269 = _0x4c6b13 >= 0xe10 ? Math['floor'](_0x4c6b13 / 0xe10) : 0x0,
                        _0x4c6b13 = _0x4c6b13 - _0x3c8269 * 0xe10,
                        _0x2207a7 = Math['floor'](_0x4c6b13 / 0x3c),
                        _0x4c6b13 = _0x4c6b13 - _0x2207a7 * 0x3c,
                        println('SVG0\x20cache\x20retrieved.\x20It\x20will\x20expire\x20in\x20' + _0x3c8269 + '\x20hours,\x20' + _0x2207a7 + '\x20minutes,\x20' + _0x4c6b13 + '\x20seconds', 'fne');
                    }
                } else
                    println('SVG0\x20cache\x20retrieved\x20but\x20missing\x20\x22expirationTime\x22\x20field\x20=>\x20cache\x20abort', 'fne'),
                    $StorageManager['getInstance']()['delete'](SVG0_FILE),
                    _0x63261 = undefined;
            } else
                println('missing\x20SVG0\x20cache', 'fne'),
                $StorageManager['getInstance']()['delete'](SVG0_FILE);
        } else
            println('undefined\x20SVG0_FILE\x20=>\x20SVG0\x20CACHE\x20DISABLED', 'fne');
        if (!_0x63261)
            $Net['http']('resources/SVG0_20221130_164531.xml')['get']({
                'resolve': function(_0x59124c) {
                    if (!_0x59124c['errorFlag']) {
                        _0x63261 = new DOMParser()['parseFromString'](_0x59124c['text'], 'text/xml');
                        if (SVG0_FILE)
                            $StorageManager['getInstance']()['write'](SVG0_FILE, _0x59124c['text']['replace']('<svgResources>', '<svgResources\x20expirationTime=\x22' + new Date(Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18)['getTime']() + '\x22>'));
                        if (this['_ready'])
                            _0x136df1['bind'](this)();
                    } else
                        println(_0x59124c, 'err');
                }
                ['bind'](this),
                'reject': function(_0x52309d) {
                    println(_0x52309d, 'err');
                }
            });
        else {
            if (this['_ready'])
                _0x136df1['bind'](this)();
        }
    }
    _0xb6b0d5['prototype']['constructor'] = _0xb6b0d5;
    var _0x1e9915 = new XMLSerializer();
    return _0xb6b0d5['prototype']['getSvgCode'] = function(_0x1ec1df) {
        var _0x52fc7e = this['_svgXml']['querySelector']('svg[name=\x22' + _0x1ec1df + '\x22]');
        if (!_0x52fc7e)
            return println('⚠️\x20DataLoader.getSvgCode:\x20unable\x20to\x20get\x20svg\x20resource\x20\x22' + _0x1ec1df + '\x22', 'wrn'),
            undefined;
        _0x52fc7e['removeAttribute']('name'),
        _0x52fc7e['setAttribute']('xmlns', 'http://www.w3.org/2000/svg');
        var _0x121ce0 = _0x1e9915['serializeToString'](_0x52fc7e);
        return _0x121ce0 = $MISC['colorNormalize'](_0x121ce0),
        _0x121ce0['length'] <= 0x2ee0 && (_0x121ce0 = _0x121ce0['replace'](/href="#/gm, 'href=\x22%23'),
        _0x121ce0 = _0x121ce0['replace'](/url\(#/gm, 'url(%23')),
        _0x52fc7e['removeAttribute']('xmlns'),
        _0x52fc7e['setAttribute']('name', _0x1ec1df),
        _0x121ce0;
    }
    ,
    _0xb6b0d5['prototype']['getSvgImageUrl'] = function(_0x4e8f98) {
        var _0x400b36 = this['getSvgCode'](_0x4e8f98);
        return _0x400b36 ? 'data:image/svg+xml;utf8,' + _0x400b36 : undefined;
    }
    ,
    _0xb6b0d5['prototype']['fileInject'] = function(_0x499d78, _0x5222d9) {
        var _0x2631df = _0x499d78['indexOf']('resources/SVG1') === 0x0 ? 'svg1.xml' : _0x499d78
          , _0x446c57 = $StorageManager['getInstance']()['read']('hbbtv.tvhub.' + _0x2631df)
          , _0x55a25c = _0x446c57 ? new DOMParser()['parseFromString'](_0x446c57, 'text/xml') : undefined;
        if (_0x55a25c) {
            var _0x2b64e1 = _0x55a25c['getElementsByTagName']('svgResources')[0x0]['getAttribute']('expirationTime');
            if (_0x2b64e1) {
                _0x2b64e1 = parseInt(_0x2b64e1);
                if (Date['now']() > _0x2b64e1)
                    println('cache\x20retrieved\x20for\x20file\x20\x22' + _0x2631df + '\x22\x20but\x20expired\x20=>\x20cache\x20abort', 'fne'),
                    $StorageManager['getInstance']()['delete']('hbbtv.tvhub.' + _0x499d78),
                    _0x55a25c = undefined;
                else {
                    var _0x347244 = _0x2b64e1 - Date['now'](), _0x2c7cbc = Math['floor'](_0x347244 / 0x3e8), _0x5badff, _0x14a05e;
                    _0x14a05e = _0x2c7cbc >= 0xe10 ? Math['floor'](_0x2c7cbc / 0xe10) : 0x0,
                    _0x2c7cbc = _0x2c7cbc - _0x14a05e * 0xe10,
                    _0x5badff = Math['floor'](_0x2c7cbc / 0x3c),
                    _0x2c7cbc = _0x2c7cbc - _0x5badff * 0x3c,
                    println('cache\x20retrieved\x20for\x20file\x20\x22' + _0x2631df + '\x22.\x20It\x20will\x20expire\x20in\x20' + _0x14a05e + '\x20hours,\x20' + _0x5badff + '\x20minutes,\x20' + _0x2c7cbc + '\x20seconds', 'fne');
                }
            } else
                println('cache\x20retrieved\x20for\x20file\x20\x22' + _0x2631df + '\x22\x20but\x20missing\x20\x22expirationTime\x22\x20field\x20=>\x20cache\x20abort', 'fne'),
                $StorageManager['getInstance']()['delete']('hbbtv.tvhub.' + _0x499d78),
                _0x55a25c = undefined;
        } else
            println('missing\x20cache\x20for\x20file\x20\x22' + _0x2631df + '\x22', 'fne');
        if (_0x55a25c) {
            for (var _0x42da11, _0x5b9692 = $DataLoader['getInstance']()['_svgXml']; _0x55a25c['firstElementChild']['childElementCount'] > 0x0; ) {
                _0x42da11 = _0x55a25c['firstElementChild']['childNodes'][0x0],
                _0x5b9692['getElementsByTagName']('svgResources')[0x0]['appendChild'](_0x42da11);
            }
            if (_0x5222d9)
                _0x5222d9();
        } else
            $Net['http'](_0x499d78)['get']({
                'resolve': function(_0x118987) {
                    if (!_0x118987['errorFlag']) {
                        $StorageManager['getInstance']()['write']('hbbtv.tvhub.' + _0x2631df, _0x118987['text']['replace']('<svgResources>', '<svgResources\x20expirationTime=\x22' + new Date(Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18)['getTime']() + '\x22>'));
                        for (var _0x1650d3, _0x11aedf = new DOMParser()['parseFromString'](_0x118987['text'], 'text/xml'), _0x295a75 = $DataLoader['getInstance']()['_svgXml']; _0x11aedf['firstElementChild']['childElementCount'] > 0x0; ) {
                            _0x1650d3 = _0x11aedf['firstElementChild']['childNodes'][0x0],
                            _0x295a75['getElementsByTagName']('svgResources')[0x0]['appendChild'](_0x1650d3);
                        }
                        if (_0x5222d9)
                            _0x5222d9();
                    } else {
                        println(_0x118987, 'err');
                        if (_0x5222d9)
                            _0x5222d9();
                    }
                }
                ['bind'](this),
                'reject': function(_0x18432b) {
                    println(_0x18432b, 'err');
                    if (_0x5222d9)
                        _0x5222d9();
                }
            });
    }
    ,
    {
        'instance': undefined,
        'getInstance': function(_0x63aa49) {
            if (!this['instance'])
                this['instance'] = new _0xb6b0d5(_0x63aa49);
            else {
                if (this['instance']['_ready']) {
                    if (_0x63aa49)
                        _0x63aa49();
                } else {
                    if (_0x63aa49)
                        this['instance']['instanceReadyListener']['push'](_0x63aa49);
                }
            }
            return this['instance'];
        }
    };
}()
  , $Net = {
    'http': function(_0x4a7447) {
        var _0x4b5e15 = function(_0x132ab1) {
            var _0x18f41d = (_0x132ab1['status'] / 0x64 | 0x0) !== 0x2;
            return {
                'code': _0x132ab1['status'],
                'errorFlag': _0x18f41d,
                'text': _0x18f41d ? _0x132ab1['statusText'] : _0x132ab1['response'],
                'type': _0x132ab1['getResponseHeader']('Content-Type'),
                'url': _0x132ab1['responseURL']
            };
        }
          , _0x376d60 = {
            'ajax': function(_0x1ad0b7, _0x10671d, _0x31bb81, _0x34db79, _0x3df5e1) {
                var _0x4c0270 = new XMLHttpRequest(), _0x1b9459 = _0x10671d, _0x1851a5;
                if (_0x34db79 && (_0x1ad0b7 === 'POST' || _0x1ad0b7 === 'PUT')) {
                    _0x1851a5 = '';
                    if (_0x3df5e1 === 'json')
                        _0x1851a5 = JSON['stringify'](_0x34db79);
                    else {
                        var _0x10d6f7 = 0x0;
                        for (var _0x13b419 in _0x34db79) {
                            if (_0x34db79['hasOwnProperty'](_0x13b419)) {
                                if (_0x10d6f7++)
                                    _0x1851a5 += '&';
                            }
                            _0x1851a5 += encodeURIComponent(_0x13b419) + '=' + encodeURIComponent(_0x34db79[_0x13b419]);
                        }
                    }
                }
                _0x4c0270['open'](_0x1ad0b7, _0x1b9459),
                _0x1ad0b7 === 'POST' && _0x3df5e1 === 'json' && _0x4c0270['setRequestHeader']('Content-Type', 'application/json'),
                _0x4c0270['send'](_0x1851a5),
                _0x4c0270['onload'] = function() {
                    this['status'] >= 0xc8 && this['status'] < 0x12c ? _0x31bb81['resolve'](_0x4b5e15(this)) : _0x31bb81['reject'](_0x4b5e15(this));
                }
                ,
                _0x4c0270['onerror'] = function() {
                    _0x31bb81['reject'](_0x4b5e15(this));
                }
                ;
            }
        };
        return {
            'get': function(_0xb9fe73, _0x3add99) {
                _0x376d60['ajax']('GET', _0x4a7447, _0xb9fe73, _0x3add99);
            },
            'post': function(_0x17538b, _0x189c5d, _0x391b1c) {
                _0x376d60['ajax']('POST', _0x4a7447, _0x17538b, _0x189c5d, _0x391b1c);
            },
            'put': function(_0x38669c, _0x545014) {
                _0x376d60['ajax']('PUT', _0x4a7447, _0x38669c, _0x545014);
            },
            'delete': function(_0x716718, _0x572379) {
                _0x376d60['ajax']('DELETE', _0x4a7447, _0x716718, _0x572379);
            }
        };
    },
    'getParams': function(_0x132a89) {
        var _0x2c8003 = _0x132a89 ? _0x132a89['split']('?')[0x1] : window['location']['search']['slice'](0x1), _0x30749c = {}, _0x6407bb, _0x4d351b, _0x28f491;
        if (_0x2c8003) {
            _0x2c8003 = _0x2c8003['split']('#')[0x0];
            var _0x464317 = _0x2c8003['split']('&');
            for (var _0x1bcb84 = 0x0; _0x1bcb84 < _0x464317['length']; _0x1bcb84++) {
                _0x6407bb = _0x464317[_0x1bcb84]['split']('='),
                _0x4d351b = _0x6407bb[0x0],
                _0x28f491 = typeof _0x6407bb[0x1] === 'undefined' ? !![] : _0x6407bb[0x1],
                _0x4d351b = _0x4d351b['toLowerCase']();
                if (typeof _0x28f491 === 'string')
                    _0x28f491 = _0x28f491['toLowerCase']();
                if (_0x4d351b['match'](/\[(\d+)?]$/)) {
                    var _0x5bf09f = _0x4d351b['replace'](/\[(\d+)?]/, '');
                    if (!_0x30749c[_0x5bf09f])
                        _0x30749c[_0x5bf09f] = [];
                    if (_0x4d351b['match'](/\[\d+]$/)) {
                        var _0x33df33 = /\[(\d+)]/['exec'](_0x4d351b)[0x1];
                        _0x30749c[_0x5bf09f][_0x33df33] = _0x28f491;
                    } else
                        _0x30749c[_0x5bf09f]['push'](_0x28f491);
                } else {
                    if (!_0x30749c[_0x4d351b])
                        _0x30749c[_0x4d351b] = _0x28f491;
                    else
                        _0x30749c[_0x4d351b] && typeof _0x30749c[_0x4d351b] === 'string' ? (_0x30749c[_0x4d351b] = [_0x30749c[_0x4d351b]],
                        _0x30749c[_0x4d351b]['push'](_0x28f491)) : _0x30749c[_0x4d351b]['push'](_0x28f491);
                }
            }
        }
        return _0x30749c;
    }
}
  , $StreamingService = function() {
    var _0x12a2fd = 'StreamingService', _0x398c73 = 0x0, _0x28473c = 0x1, _0x305fb0 = 0x2, _0x11204d = 0x3, _0x2c006f = 0x3 * 0x3e8, _0x477f48 = 0x2, _0x845dff = '/hbbtv/Common/player.js', _0x3bfe79 = 'https://www.raiplay.it/palinsesto/onAir.json', _0x215cee, _0x1bfd1e, _0x24904e = ![], _0x4277df = 0x0, _0x227f6e = 0x0, _0xe4b6da = 0x0, _0x250155 = 0x0, _0x4f1803 = 0x0, _0xefe064, _0x4ed7e0, _0x290af2, _0x2564d5, _0x426130, _0x1a2d4c, _0x7daed3, _0x4ded9e, _0x326e3b, _0x4efe93, _0x3bd7cd, _0x1c17d2, _0x198518, _0x437dc5, _0xb3ddba = ![];
    function _0x124a28(_0x2aff70, _0x562091, _0xbdfb7f) {
        return {
            'on': _0x2aff70,
            'ts': Date['now'](),
            'callbackFN': _0x562091,
            'data': _0xbdfb7f
        };
    }
    function _0x276a55(_0x4f896a, _0xe95540) {
        for (var _0x447d6a = 0x0; _0x447d6a < _0x4f896a['length']; _0x447d6a++) {
            var _0x1751d9 = _0x4f896a[_0x447d6a];
            for (var _0x8dddad = 0x0; _0x1751d9 && _0x8dddad < _0x1751d9['length']; _0x8dddad++) {
                var _0x1b7ba4 = _0x1751d9[_0x8dddad]['dvbTriplet']['split']('.');
                if (_0x22989f({
                    'onid': _0x1b7ba4[0x0],
                    'tsid': _0x1b7ba4[0x1],
                    'sid': _0x1b7ba4[0x2]
                }, _0xe95540))
                    return _0x1751d9[_0x8dddad];
            }
        }
    }
    function _0x348d08(_0x4f008a, _0xece647) {
        var _0x338644, _0x457610;
        if (_0xece647)
            for (_0x457610 = 0x0; _0x457610 < _0xece647['length']; _0x457610++) {
                _0x338644 = _0xece647[_0x457610]['channel'];
                if (_0x338644) {
                    _0x338644 = _0x338644['toLowerCase']()['replace'](/ /g, '-');
                    if (_0x338644 === _0x4f008a)
                        return _0xece647[_0x457610];
                }
            }
    }
    function _0x19326(_0x4c8d80, _0x3d16a2, _0x36abe8) {
        if (_0x4c8d80 && _0x3d16a2 && _0x36abe8) {
            var _0x61123c = _0x3d16a2['length'] > 0x5 ? parseInt(_0x3d16a2['substring'](0x6), 0xa) : 0x0;
            isNaN(_0x61123c) && (_0x61123c = 0x0);
            _0x4c8d80 = new Date(parseInt(_0x4c8d80['substring'](0x6), 0xa),parseInt(_0x4c8d80['substring'](0x3, 0x5), 0xa) - 0x1,parseInt(_0x4c8d80['substring'](0x0, 0x3), 0xa),parseInt(_0x3d16a2['substring'](0x0, 0x2), 0xa),parseInt(_0x3d16a2['substring'](0x3), 0xa),_0x61123c,0x0)['getTime']();
            if (!isNaN(_0x4c8d80))
                return {
                    'start': _0x4c8d80,
                    'end': new Date(_0x4c8d80 + _0x36abe8)['getTime']()
                };
        }
        return {
            'start': 0x0,
            'end': 0x0
        };
    }
    function _0x553c44() {
        var _0x2a3222 = $Gui['getInstance']()['getChildrenByClassName']('RadioPoster')[0x0];
        _0x2a3222 && _0x2a3222['update'](_0x1c9ead(EPG['tv'][0x0]));
    }
    function _0x57a6db() {
        if (_0x4efe93)
            _0x4efe93['streaming'] = ![];
        _0xefe064 && (println('[' + _0x12a2fd + ']\x20closing\x20player'),
        _0xefe064['clear'](),
        _0xefe064 = null,
        _0x7cfb56(![]));
    }
    function _0x19606e(_0x1ad1ef) {
        if (HBBTV_EMULATION || _0x1ad1ef['type'] === $Player['MEDIA_TYPES']['M3U8'])
            return 'mse';
        var _0x34ffdf = $DEVICE['userAgentInfo']
          , _0x1b10a0 = _0x34ffdf['vendorName'] === 'Samsung'
          , _0x3c12a4 = _0x1b10a0 && (_0x34ffdf['modelName'] === 'SmartTV2017' || _0x34ffdf['modelName'] === 'SmartTV2018');
        if (_0x1ad1ef['isLive'] === 'Y') {
            if ($ReaService['isRunning']() && _0x1b10a0)
                return 'oipf';
            if (_0x1b10a0 || _0x34ffdf['vendorName'] === 'Philips' && _0x34ffdf['specVersion'] >= '2.0.3') {
                var _0x348d01 = _0x49043c();
                if (_0x348d01 && (_0x348d01['majorChannel'] === 0x65 || _0x348d01['majorChannel'] === 0xca))
                    return console['warn']('--->\x20this\x20channel\x20uses\x20MSE\x20<---'),
                    'mse';
            }
            if (_0x1ad1ef['drmProtected'])
                return _0x1b10a0 ? 'mse' : 'html5';
            return _0x3c12a4 ? 'mse' : 'html5';
        } else
            return _0x1ad1ef['drmProtected'] ? _0x3c12a4 ? 'mse' : 'html5' : _0x3c12a4 ? 'oipf' : 'html5';
    }
    function _0x31137c(_0x1f9087) {
        if (_0x1f9087 === $Player['MEDIA_TYPES']['M3U8'])
            return {
                'name': 'Hls',
                'display': 'hls.js',
                'url': $Player['HLS_LIB_URL'],
                'engine': window['Hls']
            };
        if (_0x1f9087 === $Player['MEDIA_TYPES']['MPD']) {
            if (HBBTV_EMULATION && !_0xb3ddba)
                return {
                    'name': 'dashjs',
                    'display': 'dash.js',
                    'url': $Player['DASH_LIB_URL'],
                    'engine': window['dashjs']
                };
            return {
                'name': 'pico',
                'display': 'pico',
                'url': './mse_dev.js',
                'engine': window['pico']
            };
        }
    }
    function _0x66f650(_0x46fa39, _0xc4622b) {
        $Player['mse'] = !![],
        _0x46fa39['engine'] ? _0xc4622b && _0xc4622b(_0x46fa39['engine']) : $MISC['loadJS'](_0x46fa39['url'], function() {
            var _0x17b3f5 = window[_0x46fa39['name']];
            println('[' + _0x12a2fd + ']\x20installed\x20PLAYER:\x20' + _0x46fa39['name'] + '\x20v.' + (_0x17b3f5 && (_0x17b3f5['version'] || _0x17b3f5['Version'])), 'inf'),
            $Player['mse'] = !!_0x17b3f5,
            _0xc4622b && _0xc4622b(_0x17b3f5);
        }, document['body']);
    }
    function _0x107305(_0x42f868) {
        _0x215cee = document['querySelector']('object[type=\x22video/broadcast\x22]');
        var _0x3650a0 = document['createElement']('div');
        _0x3650a0['id'] = '__tvp_video_wrapper',
        _0x3650a0['style']['position'] = 'absolute',
        _0x3650a0['style']['width'] = '1280px',
        _0x3650a0['style']['height'] = '720px';
        if (HBBTV_EMULATION)
            _0x3650a0['style']['backgroundColor'] = '#000000';
        _0x215cee['parentNode']['insertBefore'](_0x3650a0, _0x215cee['nextSibling']);
        var _0x596ba5 = $DEVICE['userAgentInfo']
          , _0x3068b5 = _0x596ba5['vendorName'] === 'Samsung' && (_0x596ba5['modelName'] === 'SmartTV2017' || _0x596ba5['modelName'] === 'SmartTV2018' || _0x596ba5['modelName'] && _0x596ba5['modelName']['indexOf']('SmartTV2019') !== -0x1);
        _0x4efe93 = {
            'protocol': HBBTV_EMULATION ? 'chrome' : 'hbbtv',
            'videoWrapper': _0x3650a0,
            'requirements': {
                'channelNull': _0x3068b5
            },
            'isRemoteEnv': !location['hostname']['match'](/localhost|[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{1,3}\.[0-9]{1,3}|::1|\.local|^$/gi),
            'streaming': ![]
        },
        _0x4ed7e0 = {
            'onCanplay': function() {
                _0x560b03('onCanplay');
            },
            'onPlaybackStarted': function() {
                _0x560b03('onPlaybackStarted');
            },
            'onRepresentationSwitch': function(_0x59c668) {
                _0x560b03('onRepresentationSwitch', _0x59c668);
            },
            'onPlay': function() {
                _0x560b03('onPlay');
            },
            'onPause': function() {
                _0x560b03('onPause', {
                    'time': _0xefe064['_time'],
                    'duration': _0xefe064['_duration']
                });
            },
            'onSeeked': function() {
                _0x560b03('onSeeked');
            },
            'onTimeupdate': function() {
                _0x560b03('onTimeupdate', _0x2564d5 && {
                    'time': _0xefe064['_time'],
                    'duration': _0x4efe93['mediaPolisObject']['manifest']['live'] ? _0x2564d5['endAt'] - _0x2564d5['startFrom'] : _0xefe064['_duration']
                });
            },
            'onEnded': function() {
                _0x560b03('onEnded');
            },
            'onError': function() {
                _0x560b03('onError');
            }
        },
        println('[' + _0x12a2fd + ']\x20running\x20on\x20' + (_0x4efe93['isRemoteEnv'] ? 'remote' : 'local') + '\x20server', 'inf'),
        $VideoManager['getInstance']()['addPlayStateChangeListener'](function(_0x5d29b1, _0x3eafe0) {
            if (_0x5d29b1 === _0x398c73) {
                println('[' + _0x12a2fd + ']\x20BROADCAST\x20UNREALIZED', 'wrn');
                return;
            }
            _0x3bd7cd && _0x5d29b1 === _0x11204d && (println('[' + _0x12a2fd + ']\x20BROADCAST\x20STOPPPED'),
            _0x207641(_0x3bd7cd));
            if (_0x1c17d2 && _0x5d29b1 === _0x1c17d2['on']) {
                var _0x843013 = _0x1c17d2['callbackFN']
                  , _0x1ea951 = _0x1c17d2['data'];
                _0x1c17d2 = null;
                if (_0x843013)
                    _0x843013(_0x1ea951);
            }
        }),
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](function(_0x2eb304) {
            _0x4f1803 = Date['now']();
            if (!_0x2eb304)
                return;
            if (_0x326e3b && _0x22989f(_0x326e3b, _0x2eb304))
                return;
            println('[' + _0x12a2fd + ']\x20on\x20channel\x20change\x20event:\x20' + (_0x2eb304 && _0x2eb304['name'] + '\x20LCN:\x20' + _0x2eb304['majorChannel']), 'inf');
            if (_0x2564d5) {
                println('[' + _0x12a2fd + ']\x20there\x27s\x20a\x20media\x20content\x20still\x20running...');
                var _0x1b9f69 = $Gui['getInstance']()['getChildrenByClassName']('ScenePlayer');
                _0x1b9f69 && _0x1b9f69[0x0] && _0x1b9f69[0x0]['closePage'](!![]);
            }
            if (!EPG) {
                println('[' + _0x12a2fd + ']\x20epg\x20NOT\x20defined...', 'wrn'),
                _0x1c875f(_0x2eb304);
                return;
            }
            var _0x4f61f1 = _0x276a55([EPG['tv'], EPG['radio']], _0x2eb304);
            if (!_0x4f61f1) {
                println('[' + _0x12a2fd + ']\x20channel\x20NOT\x20found:\x20' + _0x2eb304['name'] + '\x20' + (_0x2eb304['onid'] + '.' + _0x2eb304['tsid'] + '.' + _0x2eb304['sid']), 'err');
                return;
            }
            if (_0x4f61f1['hybrid']) {
                println('[' + _0x12a2fd + ']\x20found\x20HYBRID\x20channel', 'inf');
                if ($DEVICE['userAgentInfo']['isOneDotFiveHbbTv']())
                    return;
                !_0x326e3b || _0x326e3b['name'] !== _0x215cee['currentChannel']['name'] ? (println('[' + _0x12a2fd + ']\x20starting\x20' + _0x215cee['currentChannel']['name'], 'inf'),
                _0x1c875f(_0x215cee['currentChannel'])) : println('[' + _0x12a2fd + ']\x20channel\x20already\x20playing', 'inf');
            } else {
                if (!_0x4f61f1['dvbTriplet']['startsWith']('0')) {
                    if ($ReaService['isRunning']()) {
                        println('[' + _0x12a2fd + ']\x20REA\x20is\x20RUNNING', 'wrn');
                        if ($ReaService['isChannelEnabled'](_0x2eb304))
                            return;
                        println('[' + _0x12a2fd + ']\x20but\x20channel\x20is\x20NOT\x20rea\x20enabled!\x20close\x20player', 'wrn'),
                        $ReaService['stop'](!![]);
                    }
                    _0x57a6db(),
                    _0x326e3b = _0x1c9ead(_0x2eb304),
                    _0x426130 = _0x1a2d4c = null,
                    _0x4ded9e = ![],
                    println('[' + _0x12a2fd + ']\x20REAL\x20CHANNEL', 'inf');
                    if (_0x215cee['playState'] === 0x3)
                        _0x215cee['bindToCurrentChannel']();
                    _0x198518 && _0x2b7d9c();
                } else
                    _0x326e3b = _0x1c9ead(_0x2eb304);
            }
        }),
        $MISC['loadJS'](_0x845dff, function(_0x42c5c8) {
            var _0x5621a1 = {
                'ok': !!window['$Player'],
                'url': _0x42c5c8,
                'version': $Player && $Player['getVersionString']()
            };
            println('[' + _0x12a2fd + ']\x20player\x20library\x20' + (_0x5621a1['ok'] ? 'OK' : 'FAIL') + '\x20|\x20version:' + _0x5621a1['version'], _0x5621a1['ok'] ? 'inf' : 'err'),
            _0x42f868(_0x5621a1);
        }, document['head']);
    }
    function _0x1c9ead(_0x8a4bec) {
        var _0x476ef1 = _0x8a4bec['dvbTriplet'] && _0x8a4bec['dvbTriplet']['split']('.') || [_0x8a4bec['onid'], _0x8a4bec['tsid'], _0x8a4bec['sid']];
        return {
            'name': _0x8a4bec['name'],
            'onid': parseInt(_0x476ef1[0x0], 0xa),
            'tsid': parseInt(_0x476ef1[0x1], 0xa),
            'sid': parseInt(_0x476ef1[0x2], 0xa),
            'majorChannel': parseInt(_0x8a4bec['lcn'], 0xa) || _0x8a4bec['majorChannel']
        };
    }
    function _0x22989f(_0x4b1801, _0x37ae38) {
        if (!_0x4b1801 || !_0x37ae38)
            return _0x37ae38 === _0x4b1801;
        var _0x1fa4f1, _0x400cbe, _0x1fc992, _0x4760ac = function(_0x49b135) {
            var _0x501531 = [_0x49b135['onid'], _0x49b135['tsid'], _0x49b135['sid']];
            return typeof _0x501531[0x0] === 'string' && (_0x501531[0x0] = parseInt(_0x501531[0x0], 0xa),
            _0x501531[0x1] = parseInt(_0x501531[0x1], 0xa),
            _0x501531[0x2] = parseInt(_0x501531[0x2], 0xa)),
            _0x501531;
        };
        _0x1fa4f1 = _0x4760ac(_0x4b1801),
        _0x400cbe = _0x4760ac(_0x37ae38);
        for (_0x1fc992 = 0x0; _0x1fc992 < _0x1fa4f1['length']; _0x1fc992++) {
            if (_0x1fa4f1[_0x1fc992] !== _0x400cbe[_0x1fc992])
                return ![];
        }
        return !![];
    }
    function _0x54521d() {
        if (_0x426130) {
            var _0x455a3f = _0x1c9ead(_0x426130);
            println('[' + _0x12a2fd + ']\x20notify\x20channel\x20change\x20event:\x20' + _0x426130['name'] + ',\x20dvb://' + _0x455a3f['onid'] + '.' + _0x455a3f['tsid'] + '.' + _0x455a3f['sid'], 'inf'),
            $VideoManager['getInstance']()['notifyVirtualChannelChange'](_0x455a3f);
            if (HBBTV_EMULATION && _0x4efe93 && !_0x4efe93['isRemoteEnv'])
                _0x215cee['currentChannel'] = _0x455a3f;
        }
    }
    function _0xa2e219(_0x1923ac) {
        if (_0x2564d5)
            _0x560b03('onError');
        else
            _0x426130 && println('notify\x20channel\x20change\x20error:\x20' + _0x426130, 'err');
    }
    function _0x560b03(_0x11f36a, _0x593eb8) {
        var _0x290974;
        if (!_0x4efe93['streaming']) {
            if (_0x11f36a === 'onPlay')
                println('[' + _0x12a2fd + ']\x20' + _0x11f36a);
            else {
                if (_0x11f36a === 'onPause')
                    println('[' + _0x12a2fd + ']\x20pause\x20event\x20playing\x20emulated\x20channel!', 'wrn');
                else {
                    if (!_0x24904e && _0x11f36a === 'onTimeupdate') {
                        if (_0xefe064['_time']) {
                            if (!_0x250155 || _0xefe064['_time'] - _0x250155 < 0x0) {
                                _0x250155 = _0xefe064['_time'];
                                return;
                            }
                            if (_0xefe064['_time'] - _0x250155 < 0.2) {
                                println('\x20\x20|>\x20NOT\x20READY\x20' + ((_0xefe064['_time'] - _0x250155) * 0x3e8)['toFixed'](0x1) + 'ms', 'wrn');
                                return;
                            }
                            println('\x20\x20|>\x20FIRST\x20START'),
                            _0x250155 = 0x0,
                            _0x24904e = !![],
                            _0x198518 && $MISC['loadMainJS'](function(_0x37fa76, _0x59e62f) {
                                if (!!_0x59e62f) {
                                    _0x2b7d9c();
                                    return;
                                }
                                if (_0x7daed3 === 'radio') {
                                    var _0x357458 = $Gui['getInstance']()['getChildrenByClassName']('RadioPoster');
                                    if (_0x357458 && _0x357458['length'])
                                        _0x2b7d9c(),
                                        _0x54521d();
                                    else
                                        $Gui['getInstance']()['onInfoLoad'](function() {
                                            _0x2b7d9c(),
                                            _0x54521d();
                                        });
                                } else
                                    _0x2b7d9c(),
                                    _0x54521d();
                            });
                        }
                    } else {
                        if (_0x11f36a === 'onError') {
                            println('[' + _0x12a2fd + ']\x20on\x20error:\x20' + _0xefe064['getError'](), 'err');
                            if (!_0x4277df) {
                                _0x57a6db();
                                var _0x255408 = EPG && EPG['getEpg'] && EPG['getEpg']();
                                if (!_0x255408)
                                    _0x255408 = _0x276a55([EPG['tv'], EPG['radio']], _0x426130);
                                _0x437dc5 = _0x255408 && _0x255408['type'] === 'radio' && _0x255408,
                                _0x4fa4ba(_0x255408 && _0x255408['color'] || '#000099'),
                                _0x4efe93['mediaPolisObject']['drmProtected'] ? (console['warn']('request\x20media\x20polis\x20object\x20with\x20new\x20key...'),
                                _0x4277df = setTimeout(function(_0x24892b) {
                                    _0x4277df = 0x0,
                                    $Player['mediaPolis']['parse'](_0x24892b, _0x12c834);
                                }, 0x200, _0x4efe93['mediaUrl'])) : _0x4277df = setTimeout(function(_0x166464) {
                                    _0x4277df = 0x0,
                                    _0x207641(_0x166464);
                                }, 0x200, _0x4efe93['mediaPolisObject']);
                            }
                        }
                    }
                }
            }
        }
        if (_0x11f36a === 'onRepresentationSwitch') {
            if (_0x593eb8 && _0x593eb8['type'] === 'audio') {
                var _0x23028e = _0xefe064['getAudioTracks']();
                for (_0x290974 = 0x0; _0x290974 < _0x23028e['length']; _0x290974++) {
                    if (_0x593eb8['id'] === _0x23028e[_0x290974]['id']) {
                        $VideoManager['getInstance']()['notifyVirtualComponentChange'](0x1, _0x23028e[_0x290974]);
                        break;
                    }
                }
            }
        }
        if (_0x4efe93['streaming'] && _0x290af2)
            for (_0x290974 = 0x0; _0x290974 < _0x290af2['length']; _0x290974++) {
                _0x290af2[_0x290974][_0x11f36a] && _0x290af2[_0x290974][_0x11f36a](_0x593eb8);
            }
    }
    function _0x2962c6(_0x17ad27) {
        if (!$ReaService['isRunning']()) {
            if (_0x215cee['playState'] === _0x305fb0)
                _0x215cee['stop']();
            else
                _0x57a6db();
            if (_0x2564d5)
                for (var _0x31bb8b = 0x0; !!_0x290af2 && _0x31bb8b < _0x290af2['length']; _0x31bb8b++) {
                    _0x290af2[_0x31bb8b]['onError'] && _0x290af2[_0x31bb8b]['onError']();
                }
            else {
                if (!_0x198518)
                    _0x4fa4ba();
                _0x198518['_errorMode'] = {
                    'type': _0x17ad27 && _0x17ad27['type'] || 'serv'
                },
                _0x215cee['bindToCurrentChannel'](),
                setTimeout(function() {
                    _0x215cee['stop']();
                }, 0x3e8);
            }
            return;
        }
        var _0xd6e669 = $ReaService['getTrigger']()
          , _0x3ed2e3 = $ReaService['getDistrict']();
        $SceneError['getInstance']()['_title'] = (_0xd6e669 && _0x3ed2e3 ? 'Il\x20programma\x20' + _0xd6e669['name'] + '\x20' + _0x3ed2e3['name'] : 'La\x20redazione\x20che\x20hai\x20scelto') + '<br/>non\x20è\x20disponibile.',
        _0x426130 = _0x1a2d4c = null,
        $ReaService['stop']();
        !$Gui['getInstance']()['getChildrenByClassName']('SceneError') && $Gui['getInstance']()['append']($SceneError['getInstance']());
        var _0x5e0194 = $Gui['getInstance']()['getChildrenByClassName']('Scene0');
        _0x5e0194 && _0x5e0194[0x0]['_visible'] ? _0x5e0194[0x0]['visibleTrigger'](![], function() {
            $SceneError['getInstance']()['visibleTrigger'](!![]);
        }) : $SceneError['getInstance']()['visibleTrigger'](!![]),
        _0x2b7d9c(!![]);
    }
    function _0x12c834(_0x3096ee, _0x2f5c40) {
        if (_0x2f5c40) {
            println('[' + _0x12a2fd + ']\x20media\x20polis\x20error,\x20retry...', 'err');
            _0x4efe93['mediaUrl'] && _0xe4b6da ? (_0xe4b6da -= 0x1,
            _0x227f6e = setTimeout(function(_0x4f9636) {
                _0x227f6e = 0x0,
                $Player['mediaPolis']['parse'](_0x4f9636, _0x12c834);
            }, _0x2c006f, _0x4efe93['mediaUrl'])) : _0x2962c6();
            return;
        }
        var _0x28432a;
        if (_0x3096ee['type'] === $Player['MEDIA_TYPES']['MPD'])
            _0x28432a = $Player['utils']['parseMPD'];
        else
            _0x3096ee['type'] === $Player['MEDIA_TYPES']['M3U8'] && (_0x28432a = $Player['utils']['parseHLS']);
        _0xe4b6da = _0x477f48,
        _0x28432a ? _0x28432a(_0x3096ee['url'], function(_0x65794f) {
            if (!_0x65794f)
                return setTimeout(function() {
                    _0x12c834(_0x3096ee);
                }, 0xfa);
            _0x3096ee['manifest'] = _0x65794f,
            _0x207641(_0x3096ee);
        }) : (_0x3096ee['manifest'] = {
            'audio': null,
            'text': null,
            'video': null,
            'availabilityStartTime': 0x0,
            'live': ![],
            'canRestart': ![],
            'valid': !![]
        },
        _0x207641(_0x3096ee));
    }
    function _0x207641(_0x56226e) {
        if (!_0x56226e || !!_0x56226e['error'])
            return _0xa2e219(0x1);
        if (_0x56226e['isLive'] === 'Y' && _0x56226e['type'] === $Player['MEDIA_TYPES']['MPD']) {
            if (!_0x56226e['manifest']['valid']) {
                println('[' + _0x12a2fd + ']\x20manifest\x20is\x20NOT\x20valid', 'wrn'),
                _0x54521d(),
                _0x2962c6();
                return;
            }
        }
        if (_0x56226e['drmProtected'] && _0x56226e['type'] === $Player['MEDIA_TYPES']['MPD']) {
            var _0x22f84c = _0x56226e['manifest'] && _0x56226e['manifest']['caSystems'];
            _0x22f84c && (_0x56226e['drmProtected'] = _0x22f84c['cenc'] || _0x22f84c['playready']);
        }
        if (_0x215cee['playState'] === _0x28473c || _0x215cee['playState'] === _0x305fb0) {
            println('[' + _0x12a2fd + ']\x20waiting\x20for\x20broadcast\x20stop\x20(' + _0x215cee['playState'] + ')', 'wrn');
            _0x215cee['playState'] === _0x28473c && _0x215cee['bindToCurrentChannel']();
            setTimeout(function() {
                _0x3bd7cd = _0x56226e,
                _0x215cee['stop']();
                var _0x38173b = _0x19606e(_0x56226e);
                _0x4efe93['requirements']['engine'] = _0x38173b;
                if ((_0x38173b === 'html5' || _0x38173b === 'mse') && _0x4efe93['requirements']['channelNull']) {
                    println('[' + _0x12a2fd + ']\x20changing\x20to\x20INDEPENDENT\x20APP', 'wrn'),
                    _0x4efe93['requirements']['storedChannels'] = {};
                    var _0x33d644 = _0x215cee['getChannelConfig']()['channelList'], _0x1add17, _0x112d21;
                    for (_0x1add17 = 0x0; _0x1add17 < EPG['tv']['length']; _0x1add17++) {
                        _0x112d21 = EPG['tv'][_0x1add17]['dvbTriplet']['split']('.'),
                        _0x4efe93['requirements']['storedChannels'][EPG['tv'][_0x1add17]['dvbTriplet']] = _0x33d644['getChannelByTriplet'](_0x112d21[0x0], _0x112d21[0x1], _0x112d21[0x2]);
                    }
                    for (_0x1add17 = 0x0; _0x1add17 < EPG['radio']['length']; _0x1add17++) {
                        _0x112d21 = EPG['radio'][_0x1add17]['dvbTriplet']['split']('.'),
                        _0x4efe93['requirements']['storedChannels'][EPG['radio'][_0x1add17]['dvbTriplet']] = _0x33d644['getChannelByTriplet'](_0x112d21[0x0], _0x112d21[0x1], _0x112d21[0x2]);
                    }
                    _0x215cee['setChannel'](null);
                }
            }, 0x1f4);
            return;
        }
        _0x3bd7cd = null,
        _0x57a6db(),
        _0x4efe93['mediaPolisObject'] = _0x56226e,
        _0x4efe93['streaming'] = !!_0x2564d5;
        var _0x3496d9 = _0x19606e(_0x56226e);
        _0x4efe93['requirements']['engine'] = _0x3496d9,
        println('[' + _0x12a2fd + ']\x20using\x20engine:\x20' + _0x3496d9),
        _0x1bfd1e = _0x3496d9 === 'mse';
        if (_0x3496d9 === 'oipf')
            _0xefe064 = new $Player['OipfPlayer'](_0x4ed7e0);
        else {
            if (_0x3496d9 === 'mse') {
                var _0x49b58f = _0x31137c(_0x56226e['type']);
                if (_0x49b58f && !_0x49b58f['engine'])
                    return _0x66f650(_0x49b58f, function() {
                        _0x207641(_0x56226e);
                    });
            }
            _0xefe064 = new $Player['VideoPlayer'](_0x4ed7e0);
        }
        if (_0x2564d5) {
            if (_0x2564d5['startFrom']) {
                println('[' + _0x12a2fd + ']\x20restarting\x20LIVE\x20content');
                var _0x21c78c = Date['now']() / 0x3e8 - _0x56226e['manifest']['timeShiftBufferDepth'];
                _0x2564d5['startFrom'] - _0x21c78c < 0x0 && (console['warn'](_0x12a2fd, 'cannot\x20restart:\x20insufficient\x20buffer\x20length\x20[' + _0x56226e['manifest']['timeShiftBufferDepth'] + 's]'),
                _0x2564d5['startFrom'] = _0x21c78c + 0xa),
                _0x56226e['absoluteStartFrom'] = _0x2564d5['startFrom'],
                _0xefe064['startTime'] = _0x56226e['startFrom'] = _0x2564d5['startFrom'] - _0x56226e['manifest']['availabilityStartTime'];
            } else
                _0x553c44();
        }
        _0x560b03('onManifestReady', _0x56226e),
        _0x24904e = ![],
        _0x7cfb56(!![]),
        _0x56226e['drmProtected'] ? (_0xefe064['reset'](_0x4efe93['videoWrapper']),
        _0xefe064['createVideo'](_0x4efe93['videoWrapper'], _0x56226e['type']),
        _0xefe064['setDRM'](_0x56226e['licenses'], function(_0x1421bb, _0x30b29c, _0x1cbf84) {
            println('[' + _0x12a2fd + ']\x20drm:\x20' + _0x1421bb + '\x20err:' + _0x30b29c + ',\x20errCode:' + _0x1cbf84),
            _0x1421bb === 0x0 ? (_0xefe064['start']({
                'type': _0x56226e['type'],
                'url': _0x56226e['url'],
                'config': _0x56226e['config']
            }, _0x4efe93['videoWrapper'], !![]),
            _0xefe064['ready'] = !![]) : _0x2962c6({
                'type': 'drm'
            });
        }
        ['bind'](this))) : _0xefe064['start']({
            'type': _0x56226e['type'],
            'url': _0x56226e['url'],
            'config': _0x56226e['config']
        }, _0x4efe93['videoWrapper']);
    }
    function _0xd7f203(_0xa487ee) {
        var _0xf4eae3 = EPG['getEpg'](), _0x410c90, _0x21a883, _0x336bb2, _0x32ae29;
        _0x21a883 = _0x348d08(_0xf4eae3['epgName'], _0xa487ee && _0xa487ee['on_air']);
        if (_0x21a883) {
            _0x336bb2 = _0x21a883['currentItem'] || {};
            for (_0x32ae29 = 0x0; _0x32ae29 < 0x2; _0x32ae29++) {
                if (_0xf4eae3['chEpg']['_now']['_hhmmStartString'] !== _0x336bb2['hour']) {
                    println('[' + _0x12a2fd + ']\x20using\x20next\x20event:\x20' + _0x336bb2['hour'] + '!=' + _0xf4eae3['chEpg']['_now']['_hhmmStartString']);
                    if (_0x32ae29 === 0x0)
                        _0x336bb2 = _0x21a883['nextItem'] || {};
                    else
                        _0x336bb2 = {};
                } else
                    break;
            }
            _0x410c90 = _0x336bb2['tech_datetime'],
            _0x410c90 && (_0x410c90 = _0x19326(_0x410c90['substring'](0x0, 0xa), _0x410c90['substring'](0xb), _0xf4eae3['chEpg']['_now']['_duration'])['start']);
        } else
            _0x336bb2 = _0xf4eae3['chEpg']['_now'];
        !_0x410c90 && (println('[' + _0x12a2fd + ']\x20tech-datetime\x20NOT\x20available', 'wrn'),
        _0x410c90 = _0xf4eae3['chEpg']['_now']['_startTime']);
        _0x2564d5 = {
            'date': '',
            'time': _0xf4eae3['chEpg']['_now']['_hhmmStartString'],
            'label': _0xf4eae3['chEpg']['_now'],
            'mediaUri': _0xf4eae3['urlRestart'] || _0xf4eae3['url'],
            'startFrom': Math['round'](_0x410c90 / 0x3e8),
            'endAt': Math['round']((_0x410c90 + _0xf4eae3['chEpg']['_now']['_duration']) / 0x3e8),
            'channel': _0xf4eae3['name'],
            'name': (_0x336bb2['program'] || _0x336bb2)['name']
        };
        if (_0x4efe93['isRemoteEnv']) {
            $ReaService['stop'](!![]),
            println('[' + _0x12a2fd + ']\x20restart\x20of\x20' + (_0x2564d5['name'] + '\x20@' + _0x2564d5['time']), 'inf');
            if (!_0x2564d5['mediaUri']) {
                println('[' + _0x12a2fd + ']\x20cannot\x20find\x20media-uri!');
                for (_0x32ae29 = 0x0; _0x32ae29 < _0x290af2['length']; _0x32ae29++) {
                    _0x290af2[_0x32ae29]['onError'] && _0x290af2[_0x32ae29]['onError']();
                }
                return;
            }
            $Player['protocol'] = _0x4efe93['protocol'],
            _0x4efe93['mediaUrl'] = _0x2564d5['mediaUri'],
            _0xe4b6da = _0x477f48,
            $Player['mediaPolis']['parse'](_0x2564d5['mediaUri'], _0x12c834),
            $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
                'cg': [{
                    'key': 'cg1',
                    'val': $WebTrekk['CG1']
                }, {
                    'key': 'cg4',
                    'val': _0x2564d5['name']
                }, {
                    'key': 'cg8',
                    'val': _0x2564d5['name']
                }],
                'cp': [{
                    'key': 'cp2',
                    'val': _0x2564d5['channel']
                }, {
                    'key': 'cp12',
                    'val': 'rai\x20tv+'
                }],
                'url': $WebTrekk['sections']['ON_AIR'] + '/ingressoRestart',
                'immediate': !![]
            });
        }
    }
    function _0xb2b8fe(_0x1dcdf3) {
        if (_0x1dcdf3['hybrid']) {
            if (_0x1dcdf3['definition'] === 'ultrahigh') {
                var _0x2e48ba = $MISC['getResolution']();
                return _0x2e48ba === 'UHD' || _0x2e48ba === '8K';
            }
        }
        return !![];
    }
    function _0x1c875f(_0x453614) {
        var _0x2e9de0;
        if (!EPG)
            println('[' + _0x12a2fd + ']\x20config\x20manager\x20is\x20not\x20READY', 'wrn'),
            $QuickConfManager['getInstance'](function() {
                println('[' + _0x12a2fd + ']\x20quick\x20manager\x20READY', 'inf');
                var _0x5bd89e = $QuickConfManager['getInstance']()['_quickEPG'];
                if (_0x5bd89e && (_0x5bd89e['hybrid'] || HBBTV_EMULATION)) {
                    if (_0xb2b8fe(_0x5bd89e))
                        _0x31c160(_0x5bd89e['url'], _0x5bd89e);
                }
            });
        else {
            if (!EPG['getEpg']) {
                println('[' + _0x12a2fd + ']\x20EPG\x20is\x20not\x20READY', 'wrn'),
                _0x2e9de0 = _0x276a55([EPG['tv'], EPG['radio']], _0x453614);
                if (_0x2e9de0 && (_0x2e9de0['hybrid'] || HBBTV_EMULATION)) {
                    if (_0xb2b8fe(_0x2e9de0))
                        _0x31c160(_0x2e9de0['url'], _0x2e9de0, _0x453614);
                }
            } else {
                println('[' + _0x12a2fd + ']\x20config\x20manager\x20running\x20with\x20full\x20powers'),
                _0x2e9de0 = EPG['getEpg'](_0x453614);
                if (_0x2e9de0 && (_0x2e9de0['hybrid'] || _0x2e9de0['dvbTriplet']['startsWith']('0') || HBBTV_EMULATION)) {
                    if (_0xb2b8fe(_0x2e9de0))
                        _0x31c160(_0x2e9de0['url'], _0x2e9de0, _0x453614);
                } else
                    _0x215cee['bindToCurrentChannel'](),
                    $ReaService['probe']();
            }
        }
    }
    function _0x7cfb56(_0x5c1322) {
        println('[' + _0x12a2fd + ']\x20set\x20' + (_0x5c1322 ? 'PLAYER' : 'DEFAULT') + '\x20mask', 'inf');
        var _0x2591b0 = $DEVICE['keyManager']['kset'];
        if (_0x5c1322) {
            var _0x932cb2 = _0x2591b0['NAVIGATION'] | _0x2591b0['RED'] | _0x2591b0['GREEN'] | _0x2591b0['YELLOW'] | _0x2591b0['BLUE'];
            (_0x426130 && !_0x426130['onid'] || !!_0x2564d5) && (println('[' + _0x12a2fd + ']\x20virtual\x20channel,\x20add\x20numeric\x20keys'),
            _0x932cb2 |= _0x2591b0['NUMERIC']),
            $DEVICE['keyManager']['setValue'](_0x932cb2);
        } else
            $DEVICE['keyManager']['setValue'](_0x2591b0['NAVIGATION'] | _0x2591b0['RED'] | _0x2591b0['GREEN'] | _0x2591b0['YELLOW'] | _0x2591b0['BLUE']);
    }
    function _0x49043c() {
        if (_0x426130)
            return !_0x1a2d4c && (_0x1a2d4c = _0x1c9ead(_0x426130)),
            _0x1a2d4c;
    }
    function _0x4fa4ba(_0x1213e3, _0x4f7e58) {
        println('---------\x20SHOW\x20LOADING\x20SCREEN\x20' + (_0x1213e3 || 'N/A') + '\x20----------', 'wrn');
        if (!_0x198518) {
            _0x198518 = $StreamingService['newLoadingScreen']();
            var _0x30a769 = document['getElementById']('mainFrame');
            _0x30a769['insertBefore'](_0x198518['_node'], _0x30a769['firstChild']);
        }
        _0x4f7e58 && _0x198518['addExtra'](_0x4f7e58);
        _0x198518['_background'] = _0x1213e3 || '#000099',
        _0x198518['_loadingChannel'] = _0x437dc5,
        _0x437dc5 = null,
        _0x198518['show'](!![]);
        if (EPG && EPG['getEpg']) {
            var _0x1ec724 = $Gui['getInstance']()['getChildrenByClassName']('RadioPoster')[0x0];
            _0x1ec724 && _0x1ec724['update']();
        }
    }
    function _0x2b7d9c(_0x3a4b5) {
        if (!_0x198518)
            return;
        if (!_0x3a4b5 && _0x198518['show'](![]))
            return;
        println('---------\x20DISPOSE\x20LOADING\x20SCREEN\x20----------', 'wrn'),
        document['getElementById']('mainFrame')['removeChild'](_0x198518['_node']),
        _0x198518['dispose'](),
        _0x198518 = null;
    }
    function _0x31c160(_0x22f463, _0x44df46, _0x39e65b) {
        if (!_0x22f463) {
            println('[' + _0x12a2fd + ']\x20invalid\x20url!', 'err');
            return;
        }
        if (_0x215cee['currentChannel'])
            _0x326e3b = _0x1c9ead(_0x215cee['currentChannel']);
        _0x1a2d4c = null,
        _0x7daed3 = _0x44df46['type'],
        _0x4ded9e = _0x44df46['hybrid'],
        _0x426130 = _0x39e65b || _0x1c9ead(_0x44df46) || _0x215cee['currentChannel'];
        if (_0x4efe93['isRemoteEnv']) {
            println('[' + _0x12a2fd + ']\x20playing\x20channel\x20' + _0x44df46['lcn'] + '\x20' + _0x44df46['name'] + '\x20dvb://' + _0x44df46['dvbTriplet'] + (_0x44df46['hybrid'] ? '\x20HYBRID' : ''), 'inf'),
            _0x437dc5 = _0x44df46['type'] === 'radio' && _0x44df46;
            if (!$ReaService['isRunning']() || _0x44df46['hybrid'])
                _0x4fa4ba(_0x44df46['color']);
            _0x4efe93['mediaUrl'] = _0x22f463,
            _0xe4b6da = _0x477f48,
            _0x22f463['split'](/[#?]/)[0x0]['split']('.')['pop']()['trim']() === 'm3u8' ? _0x12c834({
                'url': _0x22f463,
                'type': $Player['MEDIA_TYPES']['M3U8'],
                'live': !![]
            }) : ($Player['protocol'] = _0x4efe93['protocol'],
            $Player['mediaPolis']['parse'](_0x22f463, _0x12c834));
        } else
            _0x54521d();
    }
    function _0x287758(_0x814170, _0x354310) {
        if (!_0x215cee)
            return _0x107305(function(_0x317500) {
                _0x317500['ok'] && _0x287758(_0x814170, _0x354310);
            });
        println('[' + _0x12a2fd + ']\x20SET\x20CHANNEL,\x20type:\x20' + typeof _0x814170 + ',\x20value:\x20'),
        println(_0x814170),
        println('*******************');
        _0x227f6e && (clearTimeout(_0x227f6e),
        _0x227f6e = 0x0);
        if (_0x814170 === undefined) {
            _0x2564d5 && _0x2564d5['channel'] && $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
                'cg': [{
                    'key': 'cg1',
                    'val': $WebTrekk['CG1']
                }, {
                    'key': 'cg4',
                    'val': _0x2564d5['name']
                }, {
                    'key': 'cg8',
                    'val': _0x2564d5['name']
                }],
                'cp': [{
                    'key': 'cp2',
                    'val': _0x2564d5['channel']
                }, {
                    'key': 'cp12',
                    'val': 'rai\x20tv+'
                }],
                'url': $WebTrekk['sections']['ON_AIR'] + '/uscitaRestart',
                'immediate': !![]
            });
            if (_0x426130)
                _0x426130['name'] = _0x215cee['currentChannel']['name'];
            _0x814170 = _0x426130 || HBBTV_EMULATION;
        }
        var _0xff539c = ![];
        typeof _0x814170 === 'boolean' && (_0x814170 ? (println('[' + _0x12a2fd + ']\x20setChannel\x20by\x20FLAG,\x20virtual\x20env.\x20detected', 'inf'),
        _0x814170 = _0x215cee['currentChannel']) : (println('[' + _0x12a2fd + ']\x20setChannel\x20by\x20FLAG,\x20HbbTv\x20env.\x20detected', 'inf'),
        _0x814170 = null,
        _0xff539c = !![]));
        if (_0x814170 === null) {
            _0x2564d5 = null;
            var _0x489121 = !!_0xefe064 && $ReaService['isRunning']() === 0x0;
            _0x57a6db(),
            _0x426130 = _0x1a2d4c = null;
            _0x4277df && (clearTimeout(_0x4277df),
            _0x4277df = null);
            println('[' + _0x12a2fd + ']\x20bind\x20flag=' + _0xff539c, 'wrn');
            if (_0xff539c) {
                if (_0x215cee['playState'] === _0x11204d || _0x215cee['playState'] === _0x398c73) {
                    println('[' + _0x12a2fd + ']\x20restarting\x20channel\x20with\x20' + (_0x1bfd1e ? '(setChannel)' : '(bind)'), 'inf');
                    try {
                        _0x426130 = _0x1a2d4c = _0x326e3b = null;
                        var _0x1a2977 = $VideoManager['getInstance']()['isBinding']();
                        !$ReaService['isRunning']() && (_0x1c17d2 = _0x124a28(_0x305fb0, function() {
                            $ReaService['probe'](),
                            _0x1a2977 && !$DEVICE['userAgentInfo']['isOneDotFiveHbbTv']() && _0x1c875f(_0x215cee['currentChannel']);
                        }));
                        if (_0x1bfd1e)
                            _0x215cee['setChannel'](_0x215cee['currentChannel'], ![], null, 0x1);
                        else
                            _0x215cee['bindToCurrentChannel']();
                    } catch (_0x49a2a1) {
                        println(_0x49a2a1, 'err');
                    }
                } else {
                    println('[' + _0x12a2fd + ']\x20channel\x20already\x20playing,\x20no\x20need\x20to\x20bind', 'wrn');
                    if (!$DEVICE['userAgentInfo']['isOneDotFiveHbbTv']())
                        _0x1c875f(_0x215cee['currentChannel']);
                }
            } else {
                if (!_0x215cee['currentChannel'])
                    return;
                var _0x109a17 = Date['now']()
                  , _0x52fed2 = 0xdac;
                setTimeout(function() {
                    if (_0x4f1803 - _0x109a17 < 0x0 || _0x4f1803 - _0x109a17 > _0x52fed2) {
                        if ($ReaService['isRunning']() === 0x1 && !$ReaService['isServiceRelated']())
                            return;
                        println('[' + _0x12a2fd + ']\x20sending\x20virtual\x20channel\x20event,\x20timeout:' + (_0x4f1803 - _0x109a17), 'wrn'),
                        _0x326e3b = null,
                        $VideoManager['getInstance']()['notifyVirtualChannelChange'](_0x215cee['currentChannel']);
                    } else
                        println('[' + _0x12a2fd + ']\x20channel\x20change\x20event\x20received\x20' + (_0x4f1803 - _0x109a17) + 'ms\x20ago', 'wrn'),
                        _0x489121 && !_0x4ded9e && !HBBTV_EMULATION && (println('[' + _0x12a2fd + ']\x20SET-CHANNEL', 'wrn'),
                        _0x215cee['setChannel'](_0x215cee['currentChannel']));
                }, _0x52fed2);
            }
            return;
        }
        _0x2564d5 !== null && (println('[' + _0x12a2fd + ']\x20closing\x20media\x20content', 'inf'),
        _0x2564d5 = _0x426130 = _0x1a2d4c = null,
        _0x57a6db());
        if (!_0x354310)
            _0x1c875f(_0x1c9ead(_0x814170));
    }
    function _0x14d9e2(_0x3d4084) {
        var _0x2d754f = _0x49043c() || $VideoManager['getInstance']()['_video']['currentChannel'];
        if (!_0x2d754f)
            return;
        var _0x598aa5 = _0x2d754f['onid'] + '.' + _0x2d754f['tsid'] + '.' + _0x2d754f['sid'];
        for (var _0x428810 = 0x0, _0x4df1f0; _0x428810 < EPG['radio']['length']; _0x428810++) {
            _0x4df1f0 = EPG['radio'][_0x428810];
            if (_0x598aa5 === _0x4df1f0['dvbTriplet']) {
                if (_0x3d4084)
                    _0x428810 = _0x428810 - 0x1 < 0x0 ? EPG['radio']['length'] - 0x1 : _0x428810 - 0x1;
                else
                    _0x428810 = (_0x428810 + 0x1) % EPG['radio']['length'];
                _0x4df1f0 = EPG['radio'][_0x428810],
                _0x598aa5 = _0x4df1f0['dvbTriplet']['split']('.'),
                _0x2d754f = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['getChannelByTriplet'](parseInt(_0x598aa5[0x0]), parseInt(_0x598aa5[0x1]), parseInt(_0x598aa5[0x2])),
                _0x437dc5 = _0x4df1f0;
                !_0x2d754f ? _0x287758(_0x4df1f0) : (_0x287758(null),
                $VideoManager['getInstance']()['_video']['setChannel'](_0x2d754f, ![], null, 0x1));
                return;
            }
        }
    }
    function _0x57bc87() {
        _0x227f6e && (clearTimeout(_0x227f6e),
        _0x227f6e = 0x0);
        var _0x1751c4 = EPG['getEpg']();
        if (_0x1751c4['type'] === 'radio')
            _0xd7f203(null);
        else
            $Player['utils']['getJson'](_0x3bfe79, _0xd7f203);
    }
    function _0x21ccfb(_0x3ee991) {
        _0x227f6e && (clearTimeout(_0x227f6e),
        _0x227f6e = 0x0),
        _0x57a6db(),
        _0x3ee991 ? ($ReaService['stop'](!![]),
        _0x2564d5 = _0x3ee991['latest'],
        _0xe4b6da = _0x477f48,
        _0x4efe93['isRemoteEnv'] && ($Player['protocol'] = _0x4efe93['protocol'],
        _0x4efe93['mediaUrl'] = _0x2564d5['mediaUri'],
        $Player['mediaPolis']['parse'](_0x2564d5['mediaUri'], _0x12c834)),
        $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
            'cg': [{
                'key': 'cg1',
                'val': $WebTrekk['CG1']
            }, {
                'key': 'cg2',
                'val': 'rainews'
            }, {
                'key': 'cg3',
                'val': 'informazione\x20notiziari'
            }, {
                'key': 'cg4',
                'val': _0x3ee991['name']
            }, {
                'key': 'cg5',
                'val': 'pagina\x20notiziario'
            }, {
                'key': 'cg8',
                'val': _0x3ee991['name']
            }, {
                'key': 'cg14',
                'val': 'informazione\x20notiziari'
            }],
            'cp': [{
                'key': 'cp6',
                'val': ''
            }, {
                'key': 'cp7',
                'val': _0x2564d5['label']
            }, {
                'key': 'cp11',
                'val': 'hbbtv'
            }, {
                'key': 'cp12',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cp13',
                'val': _0x2564d5['label']
            }],
            'url': $WebTrekk['sections']['ON_AIR'] + '/notiziari',
            'immediate': !![]
        })) : _0x2564d5 = null;
    }
    function _0x35a361(_0x3f8eb5) {
        if (!_0x290af2)
            _0x290af2 = [];
        _0x290af2['push'](_0x3f8eb5);
    }
    function _0x5df1da() {
        return _0xefe064;
    }
    function _0x537ee9() {
        return _0x4efe93 && _0x4efe93['mediaPolisObject'];
    }
    function _0x299a4c() {
        return _0x4efe93['requirements'];
    }
    function _0x2e111f(_0x5725fc) {
        if (_0x4efe93)
            return (_0x5725fc === 'hbbtv' || _0x5725fc === 'chrome') && (_0x4efe93['protocol'] = _0x5725fc),
            _0x4efe93['protocol'];
    }
    return {
        'version': 0x7,
        'codeName': 'purring\x20player',
        'getChannel': _0x49043c,
        'getStreamingMediaPolis': _0x537ee9,
        'getStreamingRequirements': _0x299a4c,
        'getPlayer': _0x5df1da,
        'setMediaListener': _0x35a361,
        'setChannel': _0x287758,
        'play': _0x31c160,
        'nextChannel': _0x14d9e2,
        'setMedia': _0x21ccfb,
        'setStreamingProtocol': _0x2e111f,
        'restartEvent': _0x57bc87,
        'isSameChannel': _0x22989f,
        'displayError': _0x2962c6,
        'isChannelHybrid': function() {
            return _0x4ded9e && !_0x2564d5;
        },
        'setLoading': function(_0x2b17f1, _0x5ae002) {
            if (_0x2b17f1)
                _0x4fa4ba(_0x2b17f1, _0x5ae002);
            else
                _0x2b7d9c();
        },
        'isChannelLive': function() {
            return _0x215cee['playState'] === _0x305fb0;
        },
        'useMseDash': function() {
            _0x2e111f('hbbtv'),
            _0xb3ddba = !![],
            println('using\x20dash\x20with\x20rai-mse');
        },
        'newLoadingScreen': function(_0x2b7be7) {
            var _0xe8fb1d, _0x3b3077, _0x629220, _0x4ddfde, _0x2ec3ae, _0x1c60b6, _0x483aa1, _0x45d751, _0x3aca68, _0x26ee11 = 1.2;
            return _0x629220 = new $Svg($DataLoader['getInstance']()['getSvgCode']('RaiSquareLogo')),
            _0x629220['_visible'] = ![],
            _0x629220['_bounds'] = {
                'top': 0x37,
                'left': 0x62,
                'width': 0x3c * _0x26ee11,
                'height': 0x3c * _0x26ee11
            },
            _0x4ddfde = new $Svg('<svg\x20width=\x220\x22\x20height=\x2260\x22\x20viewBox=\x220\x200\x200\x200\x22><path></path></svg>'),
            _0x4ddfde['_visible'] = ![],
            _0x4ddfde['_bounds'] = {
                'top': 0x37,
                'left': 0x62,
                'width': 0x0,
                'height': 0x3c * _0x26ee11
            },
            _0x3b3077 = new $Svg('<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22126\x22\x20height=\x22126\x22\x20viewBox=\x22-7\x20-7\x20140.3\x20140.3\x22><g>' + '<circle\x20cx=\x2263.15\x22\x20cy=\x2263.15\x22\x20r=\x2263.15\x22\x20fill=\x22none\x22\x20stroke=\x22rgba(255,255,255,0.2)\x22\x20stroke-width=\x2214\x22\x20/>' + '<path\x20d=\x22M\x2063.15\x200\x20A\x2063.15\x2063.15,\x201,\x201,\x200,\x20126.3\x2063.15\x22\x20fill=\x22none\x22\x20stroke=\x22#fff\x22\x20stroke-width=\x2214\x22\x20/>' + '<circle\x20cx=\x2263.15\x22\x20cy=\x220\x22\x20r=\x227\x22\x20fill=\x22#fff\x22\x20/><circle\x20cx=\x22126.3\x22\x20cy=\x2263.15\x22\x20r=\x227\x22\x20fill=\x22#fff\x22\x20/>' + '<animateTransform\x20attributeName=\x22transform\x22\x20attributeType=\x22XML\x22\x20type=\x22rotate\x22\x20from=\x220\x2063.15\x2063.15\x22\x20to=\x22360\x2063.15\x2063.15\x22\x20dur=\x221.5s\x22\x20repeatCount=\x22indefinite\x22\x20/>' + '</g></svg>'),
            _0x3b3077['_bounds'] = {
                'left': 0x380,
                'top': 0x1ad,
                'width': 0x7e,
                'height': 0x7e
            },
            _0xe8fb1d = new $Widget(),
            _0xe8fb1d['_className'] = _0x2b7be7 || 'loadingScreen',
            _0xe8fb1d['_bounds'] = {
                'left': 0x0,
                'top': 0x0,
                'width': 0x780,
                'height': 0x438
            },
            _0xe8fb1d['_node']['style']['opacity'] = 0x0,
            Object['defineProperty'](_0xe8fb1d, '_background', {
                'set': function(_0x3f956a) {
                    this['_node']['style']['backgroundColor'] = _0x3f956a;
                }
            }),
            Object['defineProperty'](_0xe8fb1d, '_loadingChannel', {
                'set': function(_0x53cb6d) {
                    _0x629220['_visible'] = !!_0x53cb6d;
                    _0x2ec3ae && (_0x2ec3ae['_visible'] = ![],
                    _0x3b3077['_visible'] = !![]);
                    if (!!_0x53cb6d) {
                        var _0x277e07, _0x4e2986, _0x4a6827;
                        _0x277e07 = $DataLoader['getInstance']()['getSvgCode'](_0x53cb6d['name']);
                        if (!_0x483aa1)
                            _0x483aa1 = new DOMParser();
                        _0x4a6827 = _0x483aa1['parseFromString'](_0x277e07, 'image/svg+xml')['getElementsByTagName']('svg')[0x0];
                        if (!_0x4a6827) {
                            _0x4ddfde['_visible'] = ![];
                            return;
                        }
                        _0x4e2986 = parseFloat(_0x4a6827['getAttribute']('width')) * _0x26ee11,
                        _0x4ddfde['_width'] = _0x4e2986,
                        _0x4ddfde['_node']['setAttribute']('width', _0x4e2986),
                        _0x4ddfde['_node']['setAttribute']('viewBox', _0x4a6827['getAttribute']('viewBox')),
                        _0x4ddfde['_node']['removeChild'](_0x4ddfde['_node']['getElementsByTagName']('path')[0x0]),
                        _0x4ddfde['_node']['appendChild'](_0x4a6827['getElementsByTagName']('path')[0x0]),
                        _0x4ddfde['_visible'] = !![];
                    } else
                        _0x4ddfde['_visible'] = ![];
                }
            }),
            Object['defineProperty'](_0xe8fb1d, '_errorMode', {
                'get': function() {
                    return _0x3b3077['_visible'];
                },
                'set': function(_0x274191) {
                    _0x3b3077['_visible'] = !_0x274191,
                    _0x274191 && (!_0x2ec3ae && (_0x2ec3ae = new $Widget(),
                    _0x2ec3ae['_bounds'] = {
                        'left': 0x1c2,
                        'top': 0x1fc,
                        'width': 0x3fc,
                        'height': 0x40
                    },
                    _0x2ec3ae['_color'] = '#fff',
                    _0x2ec3ae['_font'] = '52px\x20PublicSans-Regular',
                    _0x2ec3ae['_node']['style']['lineHeight'] = '64px',
                    _0x2ec3ae['_node']['style']['letterSpacing'] = '-1.6px',
                    _0x2ec3ae['_node']['style']['textAlign'] = 'center',
                    _0x2ec3ae['_node']['innerHTML'] = _0x274191['type'] === 'drm' ? 'Errore\x20di\x20DRM' : 'Servizio\x20non\x20disponibile.',
                    this['append'](_0x2ec3ae)),
                    this['show'](!![]));
                }
            }),
            _0xe8fb1d['addExtra'] = function(_0x5b9b2e) {
                var _0x35d2c8, _0x68d801;
                if (_0x1c60b6)
                    for (_0x35d2c8 = 0x0; _0x35d2c8 < _0x1c60b6['length']; _0x35d2c8++) {
                        _0x1c60b6[_0x35d2c8]['_node']['innerHTML'] = _0x5b9b2e[_0x35d2c8]['text'],
                        _0x1c60b6[_0x35d2c8]['_bounds'] = _0x5b9b2e[_0x35d2c8]['bounds'];
                    }
                else {
                    _0x1c60b6 = [];
                    for (_0x35d2c8 = 0x0; _0x35d2c8 < _0x5b9b2e['length']; _0x35d2c8++) {
                        _0x68d801 = new $Widget(),
                        _0x68d801['_bounds'] = _0x5b9b2e[_0x35d2c8]['bounds'],
                        _0x68d801['_color'] = '#fff',
                        _0x68d801['_font'] = _0x5b9b2e[_0x35d2c8]['font'],
                        _0x68d801['_node']['style']['lineHeight'] = _0x5b9b2e[_0x35d2c8]['lineHeight'] + 'px',
                        _0x68d801['_node']['style']['letterSpacing'] = _0x5b9b2e[_0x35d2c8]['letterSpacing'] + 'px',
                        _0x68d801['_node']['style']['textAlign'] = 'center',
                        _0x68d801['_node']['innerHTML'] = _0x5b9b2e[_0x35d2c8]['text'],
                        _0x1c60b6['push'](_0x68d801),
                        this['append'](_0x68d801);
                    }
                }
            }
            ,
            _0xe8fb1d['show'] = function(_0x5ee288) {
                _0x3aca68 && (clearTimeout(_0x3aca68),
                _0x3aca68 = null);
                if (!_0x5ee288 && $ReaService['isRunning']()) {
                    var _0x13055d = Date['now']() - _0x45d751;
                    if (_0x13055d > 0x0 && _0x13055d < 0xbb8)
                        return _0x3aca68 = setTimeout(function() {
                            _0x45d751 = 0x0,
                            _0xe8fb1d['show'](![]);
                        }, 0xbb8 - _0x13055d),
                        _0x3aca68;
                }
                TRANSITION && (_0xe8fb1d['_node']['style']['transition'] = '',
                _0xe8fb1d['_node']['offsetWidth'],
                _0xe8fb1d['_node']['style']['transition'] = _0x5ee288 ? 'opacity\x200.5s' : 'opacity\x200.4s');
                _0xe8fb1d['_node']['style']['opacity'] = _0x5ee288 ? 0x1 : 0x0,
                _0x45d751 = _0x5ee288 ? Date['now']() : 0x0;
                if (!_0x5ee288 && _0x1c60b6)
                    for (var _0x35ae4e = 0x0; _0x35ae4e < _0x1c60b6['length']; _0x35ae4e++) {
                        if (_0x1c60b6[_0x35ae4e])
                            _0x1c60b6[_0x35ae4e]['_node']['innerHTML'] = '';
                    }
            }
            ,
            _0xe8fb1d['append'](_0x629220),
            _0xe8fb1d['append'](_0x4ddfde),
            _0xe8fb1d['append'](_0x3b3077),
            _0xe8fb1d;
        }
    };
}()
  , $ReaService = function() {
    var _0x90aad7 = 0x2, _0x13fdf1 = 0x0, _0x20e442 = 0x1, _0x126f37 = 0x2, _0x47fbd1 = 0x3, _0x2e0adb = ['IDLE', 'BUFFERING', 'PLAYING', 'STOPPED'], _0x1295ef = 'hbbtv.tvhub.rea', _0x83232, _0x4de17a, _0x5b1147;
    function _0x1a0881() {
        var _0x5b1f13 = $TimeManager['getInstance']()['_offset']
          , _0x3b3247 = new Date();
        return _0x3b3247['setTime'](Date['now']() + _0x5b1f13),
        {
            'week_day': _0x3b3247['getDay'](),
            'month': _0x3b3247['getMonth']() + 0x1,
            'day': _0x3b3247['getDate'](),
            'time': _0x3b3247['getHours']() * 0xe10 + _0x3b3247['getMinutes']() * 0x3c + _0x3b3247['getSeconds']()
        };
    }
    function _0x20dc43(_0x5be6ef) {
        if (typeof _0x5be6ef !== 'string' || _0x5be6ef['length'] !== 0x5 && _0x5be6ef['length'] !== 0x8)
            return println('[REA]\x20invalid\x20string\x20seconds', 'err'),
            -0x1;
        var _0x163177 = parseInt(_0x5be6ef['substring'](0x0, 0x2), 0xa)
          , _0x56b1b7 = parseInt(_0x5be6ef['substring'](0x3, 0x5), 0xa)
          , _0xf7d86f = 0x0;
        _0x5be6ef['length'] > 0x6 && (_0xf7d86f = parseInt(_0x5be6ef['substring'](0x6, 0x8), 0xa));
        if (isNaN(_0x163177) || isNaN(_0x56b1b7) || isNaN(_0xf7d86f))
            return println('[REA]\x20cannot\x20convert\x20string\x20to\x20seconds', 'err'),
            -0x1;
        return _0x163177 * 0xe10 + _0x56b1b7 * 0x3c + _0xf7d86f;
    }
    function _0x28d9c4(_0x1c4d3c) {
        _0x1c4d3c < 0x0 && (_0x1c4d3c *= -0x1);
        var _0x16d6df = Math['floor'](_0x1c4d3c / 0xe10)
          , _0x3bac0a = Math['floor']((_0x1c4d3c - _0x16d6df * 0xe10) / 0x3c)
          , _0x18e4ae = _0x1c4d3c - _0x16d6df * 0xe10 - _0x3bac0a * 0x3c;
        return (_0x16d6df ? (_0x16d6df < 0xa ? '0' : '') + _0x16d6df + ':' : '') + ((_0x3bac0a < 0xa ? '0' : '') + _0x3bac0a) + ':' + ((_0x18e4ae < 0xa ? '0' : '') + _0x18e4ae);
    }
    function _0x24b9f4(_0x168a88, _0x4c1df7) {
        if (!_0x168a88 || !_0x4c1df7)
            return ![];
        if (!_0x168a88['on_air'] || _0x168a88['on_air']['length'] === 0x0)
            return !![];
        for (var _0x443349 = 0x0, _0x4ce958; _0x443349 < _0x168a88['on_air']['length']; _0x443349++) {
            _0x4ce958 = _0x168a88['on_air'][_0x443349]['split']('-');
            var _0x2e800a = parseInt(_0x4ce958[0x0]['substring'](0x3), 0xa)
              , _0x53bbb1 = parseInt(_0x4ce958[0x1]['substring'](0x3), 0xa);
            if (_0x4c1df7['month'] > _0x2e800a && _0x4c1df7['month'] < _0x53bbb1)
                return !![];
            if (_0x4c1df7['month'] === _0x2e800a)
                return _0x4c1df7['day'] >= parseInt(_0x4ce958[0x0]['substring'](0x0, 0x2), 0xa);
            if (_0x4c1df7['month'] === _0x53bbb1)
                return _0x4c1df7['day'] <= parseInt(_0x4ce958[0x1]['substring'](0x0, 0x2), 0xa);
        }
        return ![];
    }
    function _0x5cb638(_0x5761ca, _0x212650, _0x34eb8c, _0x391e3b) {
        _0x4de17a = [];
        for (var _0x1b6b10 = 0x0, _0x538a97; _0x1b6b10 < _0x5761ca['Service']['length']; _0x1b6b10++) {
            _0x538a97 = _0x5761ca['Service'][_0x1b6b10];
            var _0x328fca = _0x34eb8c[_0x538a97['dvbTriplet']];
            if (!_0x328fca)
                continue;
            if (typeof _0x328fca === 'string')
                _0x328fca = [_0x328fca];
            for (var _0x2ff3d9 = 0x0, _0x1c0623; _0x2ff3d9 < _0x328fca['length']; _0x2ff3d9++) {
                _0x1c0623 = {
                    'uid': _0x538a97['dvbTriplet'] + '.' + _0x2ff3d9,
                    'dvbTriplet': _0x538a97['dvbTriplet'],
                    'channelName': _0x538a97['name'],
                    'name': _0x328fca[_0x2ff3d9],
                    'url': _0x538a97['url'],
                    'nth': -0x1,
                    'restart': typeof _0x538a97['restart'] === 'string' ? _0x538a97['restart'] === 'true' : _0x391e3b === 'true',
                    'delay': _0x538a97['delay'] && parseInt(_0x538a97['delay']) || 0x0
                },
                _0x4de17a['push'](_0x1c0623),
                !_0x5b1147 && _0x212650 && _0x212650['uid'] === _0x1c0623['uid'] && (_0x5b1147 = _0x1c0623);
            }
        }
        _0x4de17a['sort'](function(_0x2d81dc, _0x54c324) {
            if (_0x2d81dc['name']['toLowerCase']() < _0x54c324['name']['toLowerCase']())
                return -0x1;
            if (_0x2d81dc['name']['toLowerCase']() > _0x54c324['name']['toLowerCase']())
                return 0x1;
            return 0x0;
        });
    }
    function _0x4eb49c() {
        _0x83232 && _0x83232['alarmId'] && (println('[REA]\x20disposed\x20timer', 'wrn'),
        clearTimeout(_0x83232['alarmId']),
        _0x83232['alarmId'] = null);
    }
    function _0x167773() {
        println('[REA]\x20back\x20to\x20original\x20channel');
        var _0x4070c5 = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['getChannelByTriplet'](_0x83232['origin']['onid'], _0x83232['origin']['tsid'], _0x83232['origin']['sid']);
        if (_0x4070c5)
            $VideoManager['getInstance']()['_video']['setChannel'](_0x4070c5, ![], null, 0x1);
        else
            $StreamingService['setChannel'](HBBTV_EMULATION);
    }
    function _0x5a7ee4() {
        println('[REA]\x20end\x20of\x20content'),
        _0x83232['alarmId'] = null;
        if (_0x83232['triggers']['length'])
            _0x83232['triggers']['shift']();
        $StreamingService['setLoading'](_0x83232['color']),
        $StreamingService['setChannel'](null),
        _0x83232['running'] = _0x47fbd1,
        _0x167773();
    }
    function _0x373aa1(_0x5250a3) {
        if (!_0x5b1147 || !_0x83232) {
            if (_0x83232) {
                if (_0x83232['running'])
                    $StreamingService['setLoading']();
                _0x83232['running'] = _0x13fdf1;
            }
            return;
        }
        var _0x225183 = _0x5250a3['name'] + '\x20' + _0x5250a3['onid'] + '.' + _0x5250a3['tsid'] + '.' + _0x5250a3['sid'];
        if (_0x83232['channelName'] === _0x225183) {
            println('[REA]\x20duplicate\x20event!\x20[' + _0x5250a3['name'] + ']');
            return;
        }
        _0x83232['channelName'] = _0x225183,
        println('[REA]\x20status:\x20' + _0x2e0adb[_0x83232['running']] + '\x20|\x20' + _0x5250a3['name'] + '\x20|\x20' + _0x5b1147['channelName']);
        if (_0x5250a3['name']['noBOM']() === _0x5b1147['channelName']) {
            if (_0x83232['running'] === _0x20e442) {
                if (_0x5250a3['name'] === _0x83232['origin']['name']) {
                    println('[REA]\x20selected\x20origin\x20channel', 'wrn'),
                    $StreamingService['setLoading'](),
                    _0x83232['running'] = _0x13fdf1;
                    return;
                }
                _0x83232['running'] = _0x126f37;
                var _0x2ad7ae = _0x83232['triggers'][0x0]
                  , _0x386f6e = _0x2ad7ae['duration'];
                if (!_0x83232['serviceRelated'])
                    _0x386f6e += _0x5b1147['delay'];
                _0x83232['alarmId'] = setTimeout(_0x5a7ee4, _0x386f6e * 0x3e8),
                println('[REA]\x20rea\x20is\x20current\x20playing\x20content!\x20Resume\x20in\x20' + _0x28d9c4(_0x386f6e));
                if (_0x83232['serviceRelated'])
                    $StreamingService['setLoading']();
                else {
                    _0x225183 = $BannerReaStreaming['getInstance']();
                    if (!$Gui['getInstance']()['getChildrenByClassName']('BannerReaStreaming'))
                        $Gui['getInstance']()['append'](_0x225183);
                    _0x225183['visibleTrigger'](!![]);
                }
            }
        } else {
            if (_0x83232['running'] === _0x20e442) {
                println('[REA]\x20incoherent\x20state,\x20wait...', 'wrn');
                return;
            }
            var _0x444afd = _0x8dd9c5(_0x5250a3);
            println('[REA]\x20channel\x20' + _0x5250a3['name'] + '\x20is\x20' + (_0x444afd ? 'ENABLED' : 'DISABLED'));
            if (_0x83232['running'] || !_0x444afd) {
                _0x4eb49c();
                if (_0x83232['running'] === _0x47fbd1) {
                    $StreamingService['setLoading']();
                    if (_0x83232['triggers']['length']) {
                        var _0x492a53 = _0x1a0881()
                          , _0x26c68b = _0x83232['triggers'][0x0]['from'] - _0x492a53['time'];
                        _0x26c68b > 0x0 && (_0x83232['alarmId'] = setTimeout(_0x472923, _0x26c68b * 0x3e8),
                        println('[REA]\x20next\x20trigger\x20' + _0x83232['triggers'][0x0]['scheduled'] + '\x20SET,\x20remaining\x20' + _0x28d9c4(_0x26c68b)));
                    } else
                        println('[REA]\x20no\x20more\x20trigger\x20for\x20today');
                }
                _0x83232['running'] = _0x13fdf1;
            } else
                _0x1fe437();
        }
    }
    function _0x472923() {
        var _0x23c609, _0x447873;
        if (!_0x83232)
            return;
        _0x83232['alarmId'] = null;
        if (!_0x5b1147) {
            println('[REA]\x20alarm\x20set\x20with\x20no\x20DISTRCIT', 'err');
            return;
        }
        _0x23c609 = _0x83232['triggers'][0x0];
        if (!_0x23c609) {
            println('[REA]\x20invalid\x20TRIGGER', 'err');
            return;
        }
        _0x83232['running'] = _0x20e442;
        !_0x83232['origin'] && (_0x447873 = $StreamingService['getChannel']() || function(_0x284efb) {
            return {
                'name': _0x284efb['name'],
                'onid': _0x284efb['onid'],
                'tsid': _0x284efb['tsid'],
                'sid': _0x284efb['sid']
            };
        }($VideoManager['getInstance']()['_video']['currentChannel']),
        _0x83232['origin'] = _0x447873);
        var _0x4b30a4 = 0x23e
          , _0x456221 = $Gui['getInstance']()['getChildrenByClassName']('Scene0');
        if (_0x456221 && _0x456221[0x0]) {
            if (_0x456221[0x0]['_visible'])
                _0x4b30a4 = 0x1ad - 0x32 - 0x40 * 0x2;
        }
        $StreamingService['setLoading'](_0x83232['color'], [{
            'text': 'Selezione\x20del\x20programma<br/>' + _0x23c609['name'] + '\x20' + _0x5b1147['name'],
            'bounds': {
                'top': _0x4b30a4,
                'left': 0xa,
                'width': 0x76c,
                'height': 0x40 * 0x2
            },
            'font': '42px\x20PublicSans-Regular',
            'letterSpacing': -1.6,
            'lineHeight': 0x40
        }]);
        for (var _0x3cebe2 = 0x0, _0x567970; _0x3cebe2 < _0x83232['tunableChannels']['length']; _0x3cebe2++) {
            _0x567970 = _0x83232['tunableChannels'][_0x3cebe2];
            if (_0x567970['name'] === _0x5b1147['channelName']) {
                var _0x1923bc = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['getChannelByTriplet'](parseInt(_0x567970['triplet'][0x0]), parseInt(_0x567970['triplet'][0x1]), parseInt(_0x567970['triplet'][0x2]));
                _0x1923bc ? (_0x83232['serviceRelated'] = !![],
                $StreamingService['setChannel'](null),
                $VideoManager['getInstance']()['_video']['setChannel'](_0x1923bc, ![], null, 0x1)) : (println('[REA]\x20channel\x20not\x20tunable', 'wrn'),
                $StreamingService['displayError']());
                return;
            }
        }
        _0x83232['serviceRelated'] = ![],
        $StreamingService['play'](_0x5b1147['url'], {
            'onid': _0x83232['origin']['onid'],
            'tsid': _0x83232['origin']['tsid'],
            'sid': _0x83232['origin']['sid'],
            'name': _0x5b1147['channelName'],
            'lcn': 0x3,
            'type': 'tv',
            'color': '#159460'
        });
    }
    function _0x20a9f0(_0x569c53) {
        var _0x3737dc = [];
        for (var _0x1d2305 = 0x0; _0x1d2305 < EPG['tv']['length']; _0x1d2305++) {
            EPG['tv'][_0x1d2305]['editorName'] === _0x569c53 && _0x3737dc['push']({
                'name': EPG['tv'][_0x1d2305]['name'],
                'triplet': EPG['tv'][_0x1d2305]['dvbTriplet']['split']('.'),
                'lcn': parseInt(EPG['tv'][_0x1d2305]['lcn'])
            });
        }
        return _0x3737dc;
    }
    function _0x594ff2(_0x3f64fd, _0x3afd3e) {
        for (var _0x49f9fa = 0x0; _0x49f9fa < _0x3f64fd['length']; _0x49f9fa++) {
            for (var _0x5e3222 = 0x0; _0x5e3222 < _0x3afd3e['length']; _0x5e3222++) {
                if (_0x3f64fd[_0x49f9fa] === _0x3afd3e[_0x5e3222]['lcn'])
                    return [_0x3f64fd[_0x49f9fa]];
            }
        }
        return _0x3f64fd;
    }
    function _0x59a4a4(_0x31cb1a, _0x34172f) {
        var _0x5453d8 = $ConfigManager['getInstance']()['_source']['Configuration']['Editors']['Editor']
          , _0x3367ae = _0x5453d8['length']
          , _0x1daf93 = ![];
        $MISC['objScanner'](_0x5453d8, 'Editor', function(_0x13a89a) {
            _0x3367ae -= 0x1;
            if (_0x13a89a['name'] && _0x13a89a['name'] === _0x31cb1a && _0x13a89a['Services'])
                for (var _0x4d102d = 0x0; _0x4d102d < _0x13a89a['Services']['length']; _0x4d102d++) {
                    if (_0x13a89a['Services'][_0x4d102d]['delivery'] === '3')
                        return _0x1daf93 = !![],
                        _0x34172f(_0x13a89a['Services'][_0x4d102d], {
                            'color': _0x13a89a['color'],
                            'restart': _0x13a89a['restart']
                        }),
                        ![];
                }
            else {
                if (!_0x1daf93 && _0x3367ae < 0x0)
                    _0x34172f();
                return Array['isArray'](_0x13a89a);
            }
        });
    }
    function _0x1fe437() {
        _0x4eb49c();
        if (_0x5b1147 && _0x83232) {
            println('[REA]\x20find\x20triggers...');
            var _0x820b29 = _0x1a0881(), _0x2c2776 = _0x83232['epg'][_0x5b1147['uid']] || _0x83232['epg']['all'], _0x3d407a;
            _0x3d407a = $StreamingService['getChannel']() || $VideoManager['getInstance']()['_video']['currentChannel'];
            if (_0x3d407a) {
                if (_0x5b1147['channelName'] === (_0x3d407a['name'] || '')['noBOM']()) {
                    println('[REA]\x20default\x20service\x20selected,\x20skip\x20trigger\x20search', 'wrn');
                    return;
                }
            }
            for (var _0x27ac20 = 0x0; _0x27ac20 < _0x2c2776['length']; _0x27ac20++) {
                for (var _0x3b99f7 = 0x0; _0x3b99f7 < _0x2c2776[_0x27ac20]['days']['length']; _0x3b99f7++) {
                    if (_0x2c2776[_0x27ac20]['days'][_0x3b99f7] === _0x820b29['week_day'] || _0x2c2776[_0x27ac20]['days'][_0x3b99f7] === -0x1) {
                        _0x83232['triggers'] = [];
                        for (var _0x24e3c2 = 0x0, _0x3a9ec3, _0x21666c; _0x24e3c2 < _0x2c2776[_0x27ac20]['triggers']['length']; _0x24e3c2++) {
                            _0x3a9ec3 = _0x20dc43(_0x2c2776[_0x27ac20]['triggers'][_0x24e3c2]['to']);
                            if (_0x3a9ec3 > -0x1 && _0x820b29['time'] <= _0x3a9ec3) {
                                var _0x41eedc = _0x83232['editions'][_0x2c2776[_0x27ac20]['triggers'][_0x24e3c2]['ref']];
                                _0x24b9f4(_0x41eedc, _0x820b29) ? (_0x21666c = _0x20dc43(_0x2c2776[_0x27ac20]['triggers'][_0x24e3c2]['from']),
                                _0x83232['triggers']['push']({
                                    'name': _0x41eedc['display_name'] || '',
                                    'from': _0x21666c,
                                    'to': _0x3a9ec3,
                                    'duration': _0x3a9ec3 - _0x21666c,
                                    'scheduled': _0x2c2776[_0x27ac20]['triggers'][_0x24e3c2]['from'] + '-' + _0x2c2776[_0x27ac20]['triggers'][_0x24e3c2]['to']
                                })) : println('[REA]\x20edition\x20not\x20available', 'wrn');
                            }
                        }
                        if (_0x83232['triggers']['length']) {
                            var _0x258366 = _0x83232['triggers'][0x0]['from'] - _0x820b29['time'];
                            _0x258366 > 0x0 ? (_0x83232['alarmId'] = setTimeout(_0x472923, _0x258366 * 0x3e8),
                            println('[REA]\x20next\x20trigger\x20' + _0x83232['triggers'][0x0]['scheduled'] + '\x20SET,\x20remaining\x20' + _0x28d9c4(_0x258366) + '\x20(' + _0x5b1147['name'] + ')')) : (println('[REA]\x20we\x27re\x20on\x20air!\x20Hurry\x20up!\x20' + _0x28d9c4(_0x258366 * -0x1) + '\x20(' + _0x5b1147['name'] + ')'),
                            _0x83232['triggers'][0x0]['duration'] += _0x258366,
                            _0x472923());
                        } else
                            println('[REA]\x20no\x20triggers'),
                            _0x209b84();
                        return;
                    }
                }
            }
        } else
            println('[REA]\x20no\x20district\x20selected,\x20skip');
    }
    function _0x4a048a() {
        println('[REA]\x20starting\x20rea\x20service...'),
        $Net['http']('./resources/rea.json')['get']({
            'resolve': function(_0xb18f27) {
                if (!_0xb18f27['errorFlag'])
                    try {
                        var _0x3c2e20, _0x142583, _0x4452b2 = JSON['parse'](_0xb18f27['text']);
                        if (!_0x4452b2)
                            return println('[REA]\x20invalid\x20config\x20file', 'err');
                        if (_0x4452b2['version'] < _0x90aad7)
                            return println('[REA]\x20rea\x20version\x20NOT\x20supported', 'err');
                        println('[REA]\x20loaded\x20' + _0x4452b2['name'] + '\x20v.' + _0x4452b2['version'] + '\x20' + _0x4452b2['dateTime']);
                        if (!_0x4452b2['enabled'])
                            return println('[REA]\x20service\x20is\x20globally\x20disabled', 'wrn');
                        _0x3c2e20 = DELIVERY_FLAG === 0x0 ? 'sat' : DELIVERY_FLAG === 0x2 ? 'dtt' : 'net',
                        println('[REA]\x20current\x20delivery:\x20' + _0x3c2e20),
                        _0x3c2e20 = _0x4452b2['delivery'][_0x3c2e20];
                        if (!_0x3c2e20)
                            return println('[REA]\x20delivery\x20not\x20defined', 'err');
                        if (!_0x3c2e20['enabled'])
                            return println('[REA]\x20service\x20is\x20disabled\x20for\x20this\x20delivery', 'wrn');
                        if (!_0x4452b2['display'])
                            return println('[REA]\x20invalid\x20json\x20format:\x20missing\x20display', 'err');
                        _0x142583 = $StorageManager['getInstance']()['read'](_0x1295ef);
                        if (_0x142583)
                            try {
                                _0x142583 = JSON['parse'](_0x142583);
                            } catch (_0x1d073b) {
                                println('[REA]\x20error\x20loading\x20district\x20from\x20memory:\x20' + _0x1d073b, 'err'),
                                $StorageManager['getInstance']()['delete'](_0x1295ef),
                                _0x142583 = null;
                            }
                        _0x59a4a4(_0x4452b2['editor'], function(_0x4e4b6c, _0x2d7bf5) {
                            if (!_0x4e4b6c) {
                                println('[REA]\x20cannot\x20find\x20channels\x20for\x20' + _0x4452b2['editor'], 'err');
                                return;
                            }
                            _0x83232 = _0x3c2e20,
                            _0x83232['dateTime'] = _0x4452b2['dateTime'] || '-',
                            _0x83232['running'] = _0x13fdf1,
                            _0x83232['epg'] = _0x4452b2['epg'],
                            _0x83232['editions'] = _0x4452b2['editions'],
                            _0x83232['color'] = _0x2d7bf5['color'],
                            _0x83232['orientation'] = _0x4452b2['orientation'] === 'vertical' || _0x4452b2['orientation'] === 'horizontal' ? _0x4452b2['orientation'] : 'vertical',
                            _0x83232['tunableChannels'] = _0x20a9f0(_0x4452b2['editor']),
                            _0x83232['lcn'] = _0x594ff2(_0x83232['lcn'], _0x83232['tunableChannels']),
                            _0x5cb638(_0x4e4b6c, _0x142583, _0x4452b2['display'], _0x2d7bf5 && _0x2d7bf5['restart']),
                            println('[REA]\x20selected\x20district:\x20' + (_0x5b1147 ? _0x5b1147['name'] : 'NONE')),
                            $VideoManager['getInstance']()['addChannelChangeSucceededListener'](_0x373aa1),
                            println('[REA]\x20service\x20started'),
                            _0x8dd9c5() && _0x1fe437();
                        });
                    } catch (_0x3c02aa) {
                        println('[REA]\x20error\x20starting\x20rea:\x20' + _0x3c02aa['message'], 'err');
                    }
                else
                    println('[REA]\x20error\x20fetching\x20rea.json\x20[' + _0xb18f27['code'] + ']', 'err');
            },
            'reject': function() {
                println('[REA]\x20error\x20fetching\x20rea.json', 'err');
            }
        });
    }
    function _0x8dd9c5(_0x1e840a) {
        if (_0x83232) {
            _0x1e840a = _0x1e840a || $StreamingService['getChannel']() || $VideoManager['getInstance']()['_video']['currentChannel'];
            if (!_0x1e840a)
                return println('[REA]\x20cannot\x20find\x20channel', 'err'),
                ![];
            if (_0x83232['lcn']['length'])
                for (var _0x151a60 = 0x0; _0x151a60 < _0x83232['lcn']['length']; _0x151a60++) {
                    if (_0x83232['lcn'][_0x151a60] === _0x1e840a['majorChannel'])
                        return !![];
                }
            else
                return _0x1e840a['name'] === 'Rai\x203\x20HD';
        }
        return ![];
    }
    function _0x916f9() {
        return _0x4de17a;
    }
    function _0x45c5b2() {
        return _0x5b1147;
    }
    function _0x16cc46() {
        return _0x83232 && _0x83232['triggers'][0x0];
    }
    function _0x594f10(_0x2b412b) {
        if (_0x2b412b)
            $StorageManager['getInstance']()['write'](_0x1295ef, JSON['stringify']({
                'uid': _0x2b412b['uid']
            }));
        else
            $StorageManager['getInstance']()['delete'](_0x1295ef);
        _0x5b1147 = _0x2b412b,
        _0x1fe437();
    }
    function _0x1884f7() {
        return _0x83232 && _0x83232['orientation'];
    }
    function _0x4cbf77() {
        return _0x83232 && _0x83232['running'];
    }
    function _0x27214a() {
        return _0x83232 && _0x83232['serviceRelated'];
    }
    function _0x209b84(_0x556109) {
        if (!_0x83232)
            return;
        println('[REA]\x20stop'),
        _0x4eb49c();
        if (_0x83232['running']) {
            _0x83232['running'] = _0x47fbd1;
            if (_0x556109) {
                if (HBBTV_EMULATION)
                    $VideoManager['getInstance']()['_video']['currentChannel']['name'] = _0x83232['origin']['name'];
                _0x83232['channelName'] = null;
                return;
            }
            $StreamingService['setLoading'](_0x83232['color']),
            $StreamingService['setChannel'](null),
            _0x167773();
        }
    }
    function _0x4a6438() {
        println('[REA]\x20probe');
        if (_0x8dd9c5())
            _0x1fe437();
    }
    return {
        'version': '0.2.4',
        'init': _0x4a048a,
        'isChannelEnabled': _0x8dd9c5,
        'isRunning': _0x4cbf77,
        'isServiceRelated': _0x27214a,
        'getAllDistricts': _0x916f9,
        'getDistrict': _0x45c5b2,
        'getTrigger': _0x16cc46,
        'setDistrict': _0x594f10,
        'getOrientation': _0x1884f7,
        'probe': _0x4a6438,
        'stop': _0x209b84,
        'dispose': function() {
            _0x4eb49c(),
            _0x83232['running'] = _0x13fdf1;
        },
        'test': function(_0x25926e) {
            $ReaService['getDO']()['triggers'] && $ReaService['getDO']()['triggers']['length'] ? ($ReaService['getDO']()['triggers'][0x0]['duration'] = _0x25926e || 0x3c,
            _0x472923()) : println('[REA]\x20no\x20triggers', 'wrn');
        },
        'getDO': function() {
            return _0x83232;
        }
    };
}()
  , $SubtitleService = function() {
    var _0x178f5a = '[SUBTITLE]\x20', _0x42862d = 'hbbtv.tvhub.subs', _0x2f5a89 = ['#000000', '#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff', '#ffffff'], _0x524906 = 0x2be / 0x1a, _0x536417 = {
        'active': 0x0,
        'base64': !![],
        'hasHeader': ![],
        'fontFamily': 'monospace',
        'fontSize': 0x1,
        'fontSizes': [0x17, 0x23, 0x2e],
        'languages': ['Disattivati', 'Italiano'],
        'labels': ['Aa', 'Aa', 'Aa']
    }, _0x38d8cc = [['\x20', '0', '@', 'P', '`', 'p'], ['!', '1', 'A', 'Q', 'a', 'q'], ['\x22', '2', 'B', 'R', 'b', 'r'], ['#', '3', 'C', 'S', 'c', 's'], ['\x20', '4', 'D', 'T', 'd', 't'], ['%', '5', 'E', 'U', 'e', 'u'], ['&', '6', 'F', 'V', 'f', 'v'], ['\x27', '7', 'G', 'W', 'g', 'w'], ['(', '8', 'H', 'X', 'h', 'x'], [')', '9', 'I', 'Y', 'i', 'y'], ['*', ':', 'J', 'Z', 'j', 'z'], ['+', ';', 'K', '[', 'k', '{'], [',', '<', 'L', '\x5c', 'l', '|'], ['-', '=', 'M', ']', 'm', '}'], ['.', '>', 'N', '^', 'n', '~'], ['/', '?', 'O', '_', 'o', '\x20']], _0x25ee46 = [['\x20', '0', 'é', 'P', 'ù', 'p'], ['!', '1', 'A', 'Q', 'a', 'q'], ['\x22', '2', 'B', 'R', 'b', 'r'], ['£', '3', 'C', 'S', 'c', 's'], ['$', '4', 'D', 'T', 'd', 't'], ['%', '5', 'E', 'U', 'e', 'u'], ['&', '6', 'F', 'V', 'f', 'v'], ['\x27', '7', 'G', 'W', 'g', 'w'], ['(', '8', 'H', 'X', 'h', 'x'], [')', '9', 'I', 'Y', 'i', 'y'], ['*', ':', 'J', 'Z', 'j', 'z'], ['+', ';', 'K', '°', 'k', 'à'], [',', '<', 'L', 'ç', 'l', 'ò'], ['-', '=', 'M', '>', 'm', 'è'], ['.', '>', 'N', '^', 'n', 'ì'], ['/', '?', 'O', '#', 'o', '\x20']], _0x539ae2, _0x58d755 = ![], _0x24d2e5, _0x27a378, _0x2758b4, _0x42e44f, _0x6bafe3 = ![], _0x4d4acb = 0x0;
    function _0x22a261(_0xc81d2, _0x368cad) {
        var _0x58cc05 = !_0x536417['hasHeader'] || _0xc81d2[0x8] % 0x2 !== 0x0;
        if (!_0x58cc05) {
            println(_0x178f5a + 'not\x20a\x20subtitle\x20page', 'wrn');
            return;
        }
        var _0x5158fe = _0x536417['hasHeader'] ? (_0xc81d2[0xa] >> 0x4) % 0x2 * 0x4 + (_0xc81d2[0xa] >> 0x2) % 0x2 * 0x2 + _0xc81d2[0xa] % 0x2 : 0x3;
        _0x5158fe = _0x5158fe === 0x3 ? _0x25ee46 : _0x38d8cc;
        var _0x3d1457, _0x47d063, _0x498520, _0x5d16d0 = ![], _0x4ecb6c = 0x0, _0x19049c = 0x0, _0x3cb701 = _0x2f5a89[0x7], _0x43524b = _0x2f5a89[0x0], _0x2d3fbc, _0x30840b = '', _0x33061c = _0x536417['hasHeader'] ? 0x2b : 0x0;
        for (_0x3d1457 = 0xb; _0x3d1457 < _0x33061c; _0x3d1457++) {
            _0x498520 = _0x338a99(_0xc81d2[_0x3d1457]),
            _0x30840b += _0x38d8cc[_0x498520['row']][_0x498520['col'] - 0x2];
        }
        this['header'] = _0x30840b,
        _0x30840b = [],
        _0x2d3fbc = '';
        for (_0x3d1457 = _0x33061c; _0x3d1457 < _0x368cad; _0x3d1457++) {
            _0x47d063 = (_0x3d1457 - _0x33061c) % 0x2b;
            _0x47d063 === 0x0 && !!_0x2d3fbc && (_0x5d16d0 && (_0x2d3fbc += '</span>',
            _0x5d16d0 = ![]),
            _0x30840b['push']({
                'y': _0x4ecb6c,
                'line': _0x2d3fbc,
                'background': _0x43524b !== _0x2f5a89[0x0] && _0x43524b
            }),
            _0x2d3fbc = '',
            _0x3cb701 = _0x2f5a89[0x7],
            _0x43524b = _0x2f5a89[0x0],
            _0x19049c = 0x0);
            if (_0x47d063 < 0x3) {
                _0x47d063 === 0x2 && (_0x4ecb6c = _0xc81d2[_0x3d1457] % 0x2 * 0x10 + (_0xc81d2[_0x3d1457] >> 0x2) % 0x2 * 0x8 + (_0xc81d2[_0x3d1457] >> 0x4) % 0x2 * 0x4 + (_0xc81d2[_0x3d1457] >> 0x6) % 0x2 * 0x2 + _0xc81d2[_0x3d1457 - 0x1] % 0x2);
                continue;
            }
            _0x498520 = _0x338a99(_0xc81d2[_0x3d1457]);
            if (_0x498520['col'] > 0x1)
                _0x43524b !== _0x3cb701 && _0x19049c === 0x2 && (_0x2d3fbc += _0x5158fe[_0x498520['row']][_0x498520['col'] - 0x2]);
            else {
                if (_0x498520['col'] === 0x0) {
                    if (_0x498520['row'] >= 0x0 && _0x498520['row'] < 0x8)
                        _0x5d16d0 && (_0x2d3fbc += '</span>',
                        _0x5d16d0 = ![]),
                        _0x3cb701 = _0x2f5a89[_0x498520['row']],
                        _0x2d3fbc += '<span\x20style=\x22color:\x20' + _0x3cb701 + '\x22>',
                        _0x5d16d0 = !![];
                    else {
                        if (_0x498520['row'] === 0xb)
                            _0x19049c += 0x1;
                        else
                            _0x498520['row'] === 0xa && (_0x19049c -= 0x1);
                    }
                    _0x2d3fbc += '\x20';
                } else {
                    if (_0x498520['col'] === 0x1) {
                        if (_0x498520['row'] === 0xd)
                            _0x43524b = _0x3cb701;
                        else
                            _0x498520['row'] === 0xc && (_0x43524b = _0x2f5a89[0x0]);
                    }
                }
            }
        }
        if (_0x2d3fbc) {
            if (_0x5d16d0)
                _0x2d3fbc += '</span>';
            _0x30840b['push']({
                'y': _0x4ecb6c,
                'line': _0x2d3fbc,
                'background': _0x43524b !== _0x2f5a89[0x0] && _0x43524b
            });
        }
        this['captions'] = _0x30840b;
    }
    function _0x338a99(_0x914562) {
        return {
            'col': (_0x914562 >> 0x1) % 0x2 * 0x4 + (_0x914562 >> 0x2) % 0x2 * 0x2 + (_0x914562 >> 0x3) % 0x2,
            'row': (_0x914562 >> 0x4) % 0x2 * 0x8 + (_0x914562 >> 0x5) % 0x2 * 0x4 + (_0x914562 >> 0x6) % 0x2 * 0x2 + (_0x914562 >> 0x7) % 0x2
        };
    }
    function _0x5c0b02(_0x51dfae) {
        for (var _0x29e6a1 = [], _0x2ef87c = 0x0; _0x2ef87c < _0x51dfae['length']; _0x2ef87c += 0x2)
            _0x29e6a1['push'](parseInt(_0x51dfae['substring'](_0x2ef87c, _0x2ef87c + 0x2), 0x10));
        return _0x29e6a1;
    }
    function _0x1d1c05(_0x563a12) {
        var _0x21af5a = window['atob'](_0x563a12)
          , _0xd5e3f0 = _0x21af5a['length']
          , _0x2182d8 = new Uint8Array(_0xd5e3f0);
        for (var _0x4ab22f = 0x0; _0x4ab22f < _0xd5e3f0; _0x4ab22f++) {
            _0x2182d8[_0x4ab22f] = _0x21af5a['charCodeAt'](_0x4ab22f);
        }
        return _0x2182d8;
    }
    function _0x3a2c28(_0x4332ff) {
        if (!_0x4332ff)
            return;
        var _0x3f1102 = _0x4332ff['length'] || _0x4332ff['byteLength'];
        if (_0x3f1102 % 0x2b !== 0x0) {
            if (_0x3f1102)
                println(_0x178f5a + 'invalid\x20length:\x20' + _0x3f1102);
            _0x464c45();
            return;
        }
        var _0x3a037b = new _0x22a261(_0x4332ff,_0x3f1102)
          , _0x9e79a7 = _0x464c45();
        if (_0x3a037b['captions']) {
            for (var _0xbf3a48 = 0x0; _0xbf3a48 < _0x3a037b['captions']['length']; _0xbf3a48++) {
                if (_0xbf3a48 === 0x0) {
                    var _0x2ae00b = _0x3a037b['captions'][0x0]['y']
                      , _0x2722b9 = 0x16 + (0x2 - _0x536417['fontSize']);
                    _0x2ae00b > _0x2722b9 && (_0x2ae00b -= _0x2ae00b - _0x2722b9);
                    _0x2ae00b *= _0x524906;
                    if (_0x2758b4 && _0x3a037b['captions']['length'] === 0x1) {
                        if (_0x2758b4[0x1]['y'] === _0x3a037b['captions'][0x0]['y']) {
                            if (_0x536417['fontSize'] === 0x0)
                                _0x2ae00b -= _0x524906;
                            else {
                                if (_0x536417['fontSize'] === 0x1)
                                    _0x2ae00b -= _0x524906 / 0x2;
                            }
                        }
                    }
                    if (_0x3a037b['captions'][0x0]['y'] > 0xd) {
                        if (_0x536417['fontSize'] === 0x0)
                            _0x2ae00b += _0x524906;
                        else {
                            if (_0x536417['fontSize'] === 0x1)
                                _0x2ae00b += _0x524906 / 0x2;
                        }
                    }
                    _0x539ae2['firstChild']['style']['top'] = _0x2ae00b + 'px',
                    _0x3a037b['captions'][0x0]['background'] ? _0x539ae2['firstChild']['style']['backgroundColor'] = _0x490973(_0x3a037b['captions'][0x0]['background']) : _0x539ae2['firstChild']['style']['backgroundColor'] = 'rgba(0,0,0,0.8)';
                }
                _0x9e79a7['innerHTML'] += '<div>' + _0x3a037b['captions'][_0xbf3a48]['line'] + '</div>';
            }
            _0x3a037b['captions']['length'] > 0x1 && (_0x2758b4 = _0x3a037b['captions']);
        }
    }
    function _0x490973(_0x3185a7) {
        var _0x1ebb89 = parseInt(_0x3185a7['substring'](0x1, 0x3), 0x10)
          , _0x42bbbc = parseInt(_0x3185a7['substring'](0x3, 0x5), 0x10)
          , _0x4324ca = parseInt(_0x3185a7['substring'](0x5, 0x7), 0x10);
        return 'rgba(' + _0x1ebb89 + ',' + _0x4324ca + ',' + _0x42bbbc + ',.8)';
    }
    function _0x464c45() {
        var _0x23541f = _0x539ae2['firstChild']['firstChild'];
        return _0x23541f['innerHTML'] = '',
        _0x23541f;
    }
    function _0x16acf8() {
        var _0x4afdb7 = _0x539ae2['firstChild']['firstChild'];
        _0x4afdb7['style']['fontSize'] = _0x536417['fontSizes'][_0x536417['fontSize']] + 'px';
    }
    function _0x543195() {
        if (!EPG)
            return ![];
        for (var _0x3e5745 = 0x0; _0x3e5745 < EPG['tv']['length']; _0x3e5745++) {
            if (EPG['tv'][_0x3e5745] && EPG['tv'][_0x3e5745]['dvbTriplet'] === _0x27a378)
                return EPG['tv'][_0x3e5745]['subtitles'] === 'true';
        }
        return ![];
    }
    function _0x31d15e(_0x272ca9, _0x58e3dd) {
        if (_0x42e44f)
            for (var _0x10ef5e = 0x0; _0x10ef5e < _0x42e44f['length']; _0x10ef5e++) {
                _0x42e44f[_0x10ef5e]({
                    'action': _0x272ca9,
                    'value': _0x58e3dd
                });
            }
        _0x272ca9 === 'activation' && $VideoManager['getInstance']()['notifyVirtualComponentChange'](0x2, _0x536417['languages'][_0x536417['active']]);
    }
    function _0x42f6ce() {
        return './resources/subtitles/' + _0x27a378 + '.dsmx';
    }
    function _0x345e76(_0x333b5a) {
        if (_0x333b5a['status'] === 'trigger') {
            if (_0x333b5a['name'] !== _0x27a378) {
                println(_0x178f5a + 'stream\x20event\x20received\x20' + _0x333b5a['name'] + '\x20but\x20should\x20be\x20' + _0x27a378, 'wrn');
                if (!_0x4d4acb) {
                    var _0x558c62 = _0x536417['active'];
                    _0xae9f6f(),
                    _0x4d4acb = setTimeout(function() {
                        _0x46ed6f(_0x558c62),
                        _0x4d4acb = 0x0;
                    }, 0x3e8);
                }
            } else {
                if (SUBTITLE_LOG)
                    println(_0x178f5a + _0x333b5a['status'] + '\x20|\x20' + _0x333b5a['text']);
                _0x3a2c28(_0x536417['base64'] ? _0x1d1c05(_0x333b5a['text']) : _0x5c0b02(_0x333b5a['data']));
            }
        } else
            println(_0x178f5a + 'stream\x20event\x20error\x20' + _0x333b5a['name'] + ':\x20' + _0x333b5a['status'], 'err'),
            _0x464c45();
    }
    function _0x212b28(_0x44c410) {
        if (!_0x6bafe3 || !_0x44c410)
            return;
        var _0x2b556d = _0x44c410['onid'] + '.' + _0x44c410['tsid'] + '.' + _0x44c410['sid'], _0x486b84;
        if (_0x2b556d !== _0x27a378) {
            _0x486b84 = _0x536417['active'],
            _0x27a378 = _0x2b556d;
            if (_0x486b84) {
                _0x464c45();
                if (_0x543195()) {
                    var _0x57ed2d = $StreamEventManager['request'](_0x24d2e5, _0x42f6ce(), _0x27a378);
                    println(_0x178f5a + 'request\x20' + (_0x57ed2d && _0x57ed2d['code'] + '\x20-\x20' + _0x57ed2d['text']));
                    if (_0x57ed2d['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
                        _0x31d15e('activation', !![]);
                } else
                    println(_0x178f5a + 'channel\x20NOT\x20active', 'wrn'),
                    _0xae9f6f(),
                    _0x536417['active'] = _0x486b84;
            }
        }
    }
    function _0x498e81(_0xc0e17c, _0x5b8101) {
        if (_0xc0e17c === $StreamEventManager['RESOURCE_DATA'])
            _0x345e76(_0x5b8101);
        else {
            println(_0x178f5a + _0xc0e17c + '\x20' + _0x5b8101);
            if (_0xc0e17c === $StreamEventManager['RESOURCE_LOST'])
                _0x464c45();
        }
    }
    function _0x608998() {
        var _0x44b50c;
        if (_0x6bafe3) {
            println(_0x178f5a + 'service\x20already\x20initialized', 'wrn');
            return;
        }
        _0x6bafe3 = !![];
        !_0x24d2e5 && (_0x24d2e5 = $StreamEventManager['sign'](0xa, _0x498e81),
        println(_0x178f5a + 'received\x20id:' + _0x24d2e5));
        _0x44b50c = $VideoManager['getInstance']()['_video']['currentChannel'];
        if (!_0x44b50c) {
            println(_0x178f5a + 'cannot\x20find\x20current\x20channel', 'err');
            return;
        }
        println(_0x178f5a + 'initialized'),
        _0x539ae2 = $MISC['html2Element']('<div\x20id=\x22subtitleRoot\x22\x20style=\x22position:\x20absolute;\x20top:\x209px;\x20width:\x201280px;\x20height:\x20702px;\x22>' + '<div\x20id=\x22subtitleBox\x22\x20style=\x22display:\x20table;\x20position:\x20absolute;\x20left:\x2050%;\x20height:\x20auto;\x20transform:\x20translateX(-50%);\x20width:\x20fit-content;\x20' + 'padding:\x200\x2014px;\x20color:\x20#fff;\x20background-color:rgba(0,0,0,0.8);\x20border-radius:\x208px\x22>' + '<div\x20style=\x22position:\x20relative;\x20width:\x20auto;\x20margin:\x200\x20auto;\x20text-align:\x20center;\x20font-family:\x20' + _0x536417['fontFamily'] + ';\x22></div></div></div>'),
        _0x16acf8();
        var _0x33a9c4 = document['getElementById']('video')['nextSibling'];
        document['body']['insertBefore'](_0x539ae2, _0x33a9c4),
        _0x27a378 = _0x44b50c['onid'] + '.' + _0x44b50c['tsid'] + '.' + _0x44b50c['sid'],
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](_0x212b28);
    }
    function _0x423780() {
        _0x58d755 = DEBUG || CONSOLE_DEBUG;
        var _0x5461eb = $StorageManager['getInstance']()['read'](_0x42862d);
        if (_0x5461eb)
            try {
                _0x5461eb = JSON['parse'](_0x5461eb),
                _0x536417['fontSize'] = _0x5461eb['fontSize'] || 0x0,
                println(_0x178f5a + 'loaded\x20subtitle\x20preferences');
                var _0x1930f8 = $VideoManager['getInstance']()['_video']['currentChannel'];
                _0x27a378 = _0x1930f8['onid'] + '.' + _0x1930f8['tsid'] + '.' + _0x1930f8['sid'],
                _0x5461eb['active'] && (_0x543195() ? _0x46ed6f(_0x5461eb['active']) : (println(_0x178f5a + 'channel\x20NOT\x20active', 'wrn'),
                _0x536417['active'] = _0x5461eb['active'],
                _0x608998()));
            } catch (_0x35c494) {
                println(_0x178f5a + 'error\x20parsing\x20subtitle\x20preferences', 'err');
            }
        else
            println(_0x178f5a + 'no\x20preferences\x20found');
    }
    function _0x5b2391() {
        $StorageManager['getInstance']()['write'](_0x42862d, JSON['stringify']({
            'active': _0x536417['active'],
            'fontSize': _0x536417['fontSize']
        }));
    }
    function _0x46ed6f(_0xfa23fe) {
        !_0x6bafe3 && _0x608998();
        if (_0x536417['active'])
            return println(_0x178f5a + 'cannot\x20start\x20service\x20because\x20it\x27s\x20already\x20STARTED', 'wrn'),
            ![];
        _0x536417['active'] = _0xfa23fe;
        var _0x23d42d = $StreamEventManager['request'](_0x24d2e5, _0x42f6ce(), _0x27a378);
        println(_0x178f5a + 'request\x20' + (_0x23d42d && _0x23d42d['code'] + '\x20-\x20' + _0x23d42d['text']));
        if (_0x23d42d['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
            return _0x31d15e('activation', !![]),
            !![];
    }
    function _0xae9f6f() {
        if (!_0x536417['active'] || !_0x27a378)
            return println(_0x178f5a + 'cannot\x20stop\x20service\x20because\x20it\x27s\x20STOPPED', 'wrn'),
            ![];
        return _0x536417['active'] = 0x0,
        _0x2758b4 = null,
        $StreamEventManager['release'](_0x24d2e5),
        _0x464c45(),
        _0x31d15e('activation', ![]),
        !![];
    }
    function _0x2ad3ea() {
        if (_0x536417['active']) {
            if (_0xae9f6f())
                $SimpleBanner['getInstance']()['show'](!![], 'Sottotitoli:\x20disattivati');
        } else {
            if (_0x46ed6f(0x1))
                $SimpleBanner['getInstance']()['show'](!![], 'Sottotitoli:\x20Italiano');
        }
        _0x5b2391();
    }
    function _0x38d2bd() {
        if (!_0x58d755)
            return;
        if (!_0x6bafe3) {
            var _0xa783aa = $VideoManager['getInstance']()['_video']['currentChannel'];
            if (!_0xa783aa)
                return;
            _0x27a378 = _0xa783aa['onid'] + '.' + _0xa783aa['tsid'] + '.' + _0xa783aa['sid'];
        }
        for (var _0x15c16b = 0x0; _0x15c16b < EPG['tv']['length']; _0x15c16b++) {
            if (EPG['tv'][_0x15c16b]['dvbTriplet'] === _0x27a378) {
                if (EPG['tv'][_0x15c16b]['subtitles'] === 'true')
                    _0x2ad3ea();
                return;
            }
        }
    }
    return {
        'version': 0x5,
        'load': _0x423780,
        'save': _0x5b2391,
        'stop': _0xae9f6f,
        'start': _0x46ed6f,
        'toggle': _0x38d2bd,
        'isEnabled': function() {
            return _0x58d755;
        },
        'addSelectionListener': function(_0x1b601f) {
            if (typeof _0x1b601f !== 'function')
                return;
            if (!_0x42e44f)
                _0x42e44f = [];
            _0x42e44f['push'](_0x1b601f);
        },
        'getSetting': function(_0x521f9f) {
            return _0x536417 && _0x536417[_0x521f9f];
        },
        'setSetting': function(_0x322e29, _0x4f3839) {
            if (_0x536417) {
                _0x536417[_0x322e29] = _0x4f3839;
                if (_0x322e29 === 'fontSize')
                    _0x16acf8();
                _0x5b2391();
            }
        }
    };
}()
  , $WebTrekk = function() {
    var _0x48f4aa = 0x0, _0x1a85de = 0x1, _0x31a706 = 0x2, _0x5afbd9 = 0x3, _0x2b2abf = 0x2a, _0x191348 = ![], _0x3ed961 = null, _0x553d09 = ![], _0x505865 = '', _0x4f293d = 0x0, _0x524a42 = 0x0, _0x5551b8 = -0x1, _0x36574f, _0x41edf9, _0x282d29 = 'aggregato.hbbtv', _0x5bf37e = '', _0x11323a = '', _0x3c1562 = 0x0, _0xd2e8e0 = 0x0, _0x500686 = 0x0, _0x2e46de, _0x485297, _0x13df15, _0x47952a, _0x2b32c0 = ![];
    function _0x39fc53() {
        return Math['floor'](0x3b9aca00 + Math['random']() * 0x218711a00) + '_' + Date['now']();
    }
    function _0x38e83d(_0x3dcde9) {
        var _0x50ff74 = $StorageManager['getInstance']()['read'](_0x3dcde9);
        return !_0x50ff74 && (_0x50ff74 = _0x39fc53(),
        $StorageManager['getInstance']()['write'](_0x3dcde9, _0x50ff74)),
        _0x50ff74;
    }
    function _0x30189c(_0x2f8afd) {
        var _0xe7c648 = '', _0x31c179;
        if (_0x2f8afd)
            for (_0x31c179 = 0x0; _0x31c179 < _0x2f8afd['length']; _0x31c179++) {
                _0x2f8afd[_0x31c179] && (_0xe7c648 += '&' + _0x2f8afd[_0x31c179]['key'] + '=' + encodeURIComponent(_0x2f8afd[_0x31c179]['val'] || _0x2f8afd[_0x31c179]['value'] || ''));
            }
        return _0xe7c648;
    }
    function _0x171a84() {
        var _0x4f2ff0 = (($VideoManager['getInstance']()['_video'] || {})['currentChannel'] || $StreamingService['getChannel']() || {})['name'];
        if (_0x4f2ff0 && typeof _0x4f2ff0 === 'string')
            return _0x4f2ff0['noBOM']();
        return '';
    }
    function _0x5ba7d6(_0x3b07ce) {
        if (!_0x3b07ce)
            return ![];
        var _0x420481 = _0x3b07ce['toLowerCase']();
        for (var _0x4ae558 = 0x0; _0x4ae558 < _0x13df15['length']; _0x4ae558++) {
            if (_0x420481['indexOf'](_0x13df15[_0x4ae558]) === 0x0)
                return !![];
        }
    }
    function _0x44d9d8(_0x8f564a) {
        if (_0x191348) {
            var _0x3766a3 = new Image();
            _0x3766a3['src'] = _0x8f564a,
            _0x3766a3['onload'] = function() {}
            ,
            _0x3766a3['onerror'] = function() {}
            ;
        }
    }
    function _0x1cdf2e() {
        var _0x20e443 = '[TREKK]\x20', _0x461e9f;
        if (arguments)
            for (var _0x55d894 = 0x0; _0x55d894 < arguments['length']; _0x55d894++) {
                _0x461e9f = arguments[_0x55d894];
                if (typeof _0x461e9f === 'string')
                    _0x20e443 += _0x461e9f + '\x20|\x20';
                else {
                    if (_0x461e9f)
                        for (var _0x4bcf45 = 0x0; _0x4bcf45 < _0x461e9f['length']; _0x4bcf45++) {
                            if (_0x461e9f)
                                _0x20e443 += _0x461e9f[_0x4bcf45]['key'] + ':\x20\x27' + _0x461e9f[_0x4bcf45]['val'] + '\x27\x20|\x20';
                        }
                }
            }
        println(_0x20e443, 'inf');
    }
    function _0x51fe34(_0x284428, _0x31df52, _0x2f4455, _0x283f50) {
        _0x1cdf2e(_0x2f4455, _0x284428, _0x31df52);
        var _0x10be61 = ['323', encodeURIComponent(_0x505865 + _0x2f4455), 0x0, 0x0, 0x0, 0x0, Date['now']()];
        _0x44d9d8((_0x283f50 ? _0x41edf9 : _0x36574f) + '/wt?la=it&tz=1&p=' + _0x10be61['join'](',') + _0x30189c(_0x284428) + _0x30189c(_0x31df52) + '&eid=' + _0x47952a + '&sid=' + _0x2e46de);
    }
    function _0x55632f() {
        var _0x37251a = ![];
        if (!$StreamingService['isChannelLive']() || !!$StreamingService['getPlayer']()) {
            if (!$StreamingService['isChannelHybrid']()) {
                println('[TREKK]\x20streaming', 'wrn');
                return;
            }
            _0x37251a = !![];
        }
        var _0x12b2d0 = _0x171a84()
          , _0x4dcada = DELIVERY_FLAG === 0x2 && _0x12b2d0['toLowerCase']() === 'rai\x204k';
        println('[TREKK]\x20channel\x20name:\x20' + _0x12b2d0 + '\x20|\x20' + (_0x37251a ? 'HYBRID' + (_0x4dcada ? '\x20UHD' : '') : DELIVERY_FLAG === 0x2 ? 'DTT' : DELIVERY_FLAG === 0x0 ? 'DTH' : 'NET'), 'wrn');
        if (!_0x12b2d0)
            return;
        var _0x201947 = _0x37251a || _0x5ba7d6(_0x12b2d0);
        _0x12b2d0 !== _0x485297 && (_0x485297 = _0x12b2d0,
        _0x2b32c0 = ![],
        println('[TREKK]\x20\x27' + _0x12b2d0 + '\x27\x20has\x20tracking\x20' + (_0x201947 ? 'ENABLED' : 'DISABLED'), 'inf'),
        _0x201947 && _0x5d95c5(_0x12b2d0));
        _0x500686 = (Date['now']() - _0x3c1562) / 0x3e8 | 0x0;
        _0x500686 < 0x0 && (_0x500686 = 0x0);
        if (_0x201947 && !_0x2b32c0) {
            if (!_0x4dcada && _0x37251a)
                _0x2b32c0 = !![];
            _0x4f9cce('pos', !![], _0x12b2d0),
            _0x4f9cce('uptime', !![], _0x12b2d0);
        }
    }
    function _0x2647bb(_0xf216fa, _0x33c496) {
        switch (_0xf216fa) {
        case _0x48f4aa:
            _0x51fe34([{
                'key': 'cg1',
                'val': _0x282d29
            }, {
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cg5',
                'val': 'BANNER\x20BROADCAST'
            }], [{
                'key': 'cp2',
                'val': _0x171a84()
            }, {
                'key': 'cp5',
                'val': _0x5bf37e
            }, {
                'key': 'cp12',
                'val': _0x11323a
            }], 'bannerPolicy');
            break;
        case _0x1a85de:
            _0x51fe34([{
                'key': 'cg1',
                'val': _0x282d29
            }, {
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cg5',
                'val': 'INFORMATIVA\x20BROADCAST'
            }], [{
                'key': 'cp2',
                'val': _0x171a84()
            }, {
                'key': 'cp5',
                'val': _0x5bf37e
            }, {
                'key': 'cp12',
                'val': _0x11323a
            }], 'infoPolicy');
            break;
        case _0x31a706:
            !_0x553d09 && (_0x553d09 = !![],
            _0x51fe34([{
                'key': 'cg1',
                'val': _0x282d29
            }, {
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cg5',
                'val': 'BANNER\x20RAI\x20TV+'
            }], [{
                'key': 'cp2',
                'val': _0x171a84()
            }, {
                'key': 'cp5',
                'val': _0x5bf37e
            }, {
                'key': 'cp12',
                'val': _0x11323a
            }], 'bannerRaiTv+'));
            break;
        case _0x5afbd9:
            _0x51fe34([{
                'key': 'cg1',
                'val': _0x282d29
            }, {
                'key': 'cg2',
                'val': 'raiplay'
            }, {
                'key': 'cg5',
                'val': 'TASTO\x20BLU'
            }], [{
                'key': 'cp2',
                'val': _0x171a84()
            }, {
                'key': 'cp5',
                'val': _0x5bf37e
            }, {
                'key': 'cp12',
                'val': _0x11323a
            }], 'bannerRaiPlay');
            break;
        case _0x2b2abf:
            _0x33c496['cg'] && (!_0x44e10c(_0x33c496['cg'], 'cg2') && _0x33c496['cg']['push']({
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }));
            _0x33c496['cp'] && (!_0x44e10c(_0x33c496['cp'], 'cp5') && _0x33c496['cp']['push']({
                'key': 'cp5',
                'val': _0x5bf37e
            }),
            !_0x44e10c(_0x33c496['cp'], 'cp10') && _0x33c496['cp']['push']({
                'key': 'cp10',
                'val': 'smart\x20tv\x20-\x20hbbtv'
            }),
            !_0x44e10c(_0x33c496['cp'], 'cp11') && _0x33c496['cp']['push']({
                'key': 'cp11',
                'val': 'hbbtv'
            }),
            !_0x44e10c(_0x33c496['cp'], 'cp12') && _0x33c496['cp']['push']({
                'key': 'cp12',
                'val': _0x11323a
            }));
            if (_0x33c496['immediate']) {
                _0x51fe34(_0x33c496['cg'], _0x33c496['cp'], _0x33c496['url']);
                return;
            }
            _0x4f293d && (clearTimeout(_0x4f293d),
            _0x4f293d = 0x0);
            _0x4f293d = setTimeout(function(_0x4b7e5c) {
                _0x51fe34(_0x4b7e5c['cg'], _0x4b7e5c['cp'], _0x4b7e5c['url']),
                _0x4f293d = 0x0;
            }, 0x5 * 0x3e8, _0x33c496);
            break;
        default:
            break;
        }
    }
    function _0x44e10c(_0x20057e, _0x2f866e) {
        for (var _0x577a4c = 0x0; _0x577a4c < _0x20057e['length']; _0x577a4c++) {
            if (_0x20057e[_0x577a4c]['key'] === _0x2f866e)
                return !![];
        }
        return ![];
    }
    function _0x4f9cce(_0x57b901, _0x583b23, _0xb9bab0) {
        if (_0xb9bab0) {
            var _0x406959, _0x141e49, _0x14f5cf;
            _0x406959 = _0xb9bab0['toUpperCase']()['indexOf']('TGR'),
            _0x141e49 = _0x14f5cf = _0xb9bab0['substring'](0x0, 0x3)['toLowerCase']() + _0xb9bab0['substring'](0x3);
            _0x406959 > -0x1 && (_0x141e49 = _0x141e49['substring'](0x0, _0x406959)['trim'](),
            _0x14f5cf = _0x14f5cf['substring'](0x0, _0x406959)['trim']() + '\x20-\x20' + _0x14f5cf['substring'](_0x406959 + 0x3)['toLowerCase']()['trim']());
            var _0x201dbc = 'la\x20diretta\x20di\x20' + _0xb9bab0 + '\x20in\x20broadcast'
              , _0x27cebe = [{
                'key': 'mg1',
                'val': 'hbbtv'
            }, {
                'key': 'mg2',
                'val': _0x141e49
            }, {
                'key': 'mg4',
                'val': _0x14f5cf
            }, {
                'key': 'mg5',
                'val': 'live'
            }, {
                'key': 'mg13',
                'val': 'rai\x20tv+'
            }]
              , _0x3a1b78 = ['323', 'st', 0x0, 0x0, 0x0, 0x0, Date['now']()];
            println('[TREKK]\x20action:' + _0x57b901 + '\x20|\x20mg2:' + _0x141e49 + '\x20|\x20mg4:' + _0x14f5cf, 'inf'),
            _0x44d9d8(_0x41edf9 + '/wt.pl?la=it&tz=1&p=' + _0x3a1b78['join'](',') + '&eid=' + _0x47952a + '&sid=' + _0x2e46de + '&mt2=' + _0xd2e8e0 + '&mt1=' + (_0x583b23 ? _0x500686 : 0x0) + '&mk=' + encodeURIComponent(_0x57b901) + '&mi=' + encodeURIComponent(_0x201dbc) + _0x30189c(_0x27cebe));
        }
    }
    function _0x5d95c5(_0x66a13e) {
        _0x3c1562 = Date['now'](),
        _0x51fe34([{
            'key': 'cg1',
            'val': _0x282d29
        }, {
            'key': 'cg2',
            'val': 'rai\x20tv+'
        }, {
            'key': 'cg5',
            'val': 'SERVIZIO\x20TV\x20BROADCAST'
        }], [{
            'key': 'cp2',
            'val': _0x66a13e
        }, {
            'key': 'cp5',
            'val': _0x5bf37e
        }, {
            'key': 'cp12',
            'val': _0x11323a
        }], _0x66a13e, !![]),
        _0x4f9cce('init', ![], _0x66a13e),
        _0x4f9cce('live', ![], _0x66a13e),
        _0x4f9cce('hbbtv', ![], _0x66a13e),
        _0x4f9cce('start\x20content', ![], _0x66a13e),
        _0x4f9cce('play', ![], _0x66a13e);
    }
    function _0x55be18() {
        if (_0x524a42 || _0x5551b8 <= 0x0)
            return;
        var _0x3967a0 = new Date()
          , _0x2ed3c3 = $TimeManager['getInstance']()['_offset'];
        _0x3967a0['setTime'](Date['now']() + _0x2ed3c3);
        var _0x2aed5e = Math['floor'](Math['random']() * 0x3c)
          , _0x331277 = Math['abs'](_0x3967a0['getSeconds']() - _0x2aed5e);
        println('[TREKK]\x20set\x20up\x20UPTIME\x20in\x20' + _0x331277 + '\x20seconds');
        if (_0x331277 > 0x0 && _0x331277 < 0x3c) {
            setTimeout(function() {
                _0x55632f(),
                _0x524a42 = setInterval(function() {
                    _0x55632f();
                }, _0x5551b8 * 0x3e8);
            }, _0x331277 * 0x3e8);
            return;
        }
        _0x55632f(),
        _0x524a42 = setInterval(function() {
            _0x55632f();
        }, _0x5551b8 * 0x3e8);
    }
    function _0xbe9eae(_0x1b472c, _0x5a19eb) {
        _0x3ed961 = {
            'vod': !!_0x1b472c
        };
        if (_0x5a19eb) {
            if (_0x1b472c) {
                var _0xeb3f8c = _0x5a19eb['latest']['date']['split']('/')[0x2] || ''
                  , _0x24443e = _0x5a19eb['latest']['id'] ? 'tgr\x20-\x20' + _0x5a19eb['name'] : _0x5a19eb['name']
                  , _0x423945 = (_0x5a19eb['latest']['id'] ? 'tgr\x20' + _0x5a19eb['name'] : _0x5a19eb['name']) + '\x20del\x20' + _0x5a19eb['latest']['date'] + '\x20ore\x20' + _0x5a19eb['latest']['time'];
                _0x3ed961['mi'] = ['hbbtv', 'rai\x20tv+', !!_0x1b472c && 'vod' || 'live', _0x24443e, _0x423945]['join']('\x20-\x20'),
                _0x3ed961['mg'] = _0x30189c([{
                    'key': 'mg1',
                    'val': 'hbbtv'
                }, {
                    'key': 'mg2',
                    'val': _0x5a19eb['latest']['id'] ? 'rai\x203' : _0x5a19eb['name'] === 'TG1' ? 'rai\x201' : _0x5a19eb['name'] === 'TG2' ? 'rai\x202' : _0x5a19eb['name'] === 'TG3' ? 'rai\x203' : '',
                    'mg3': (_0x5a19eb['latest']['id'] || _0x5a19eb['name'])['toLowerCase']()
                }, {
                    'key': 'mg4',
                    'val': _0x24443e['toLowerCase']()
                }, {
                    'key': 'mg5',
                    'val': 'vod'
                }, {
                    'key': 'mg6',
                    'val': 'full\x20episode'
                }, {
                    'key': 'mg7',
                    'val': _0x423945['toLowerCase']()
                }, {
                    'key': 'mg8',
                    'val': _0xeb3f8c
                }, {
                    'key': 'mg9',
                    'val': _0x5a19eb['latest']['label']['toLowerCase']()
                }, {
                    'key': 'mg12',
                    'val': 'informazione\x20notiziari'
                }, {
                    'key': 'mg13',
                    'val': 'rainews'
                }]);
            }
        }
    }
    function _0x340141(_0x20749b, _0x5f2654) {
        _0x3ed961['mediaPosition'] = (_0x20749b || 0x0) | 0x0,
        _0x3ed961['mediaDuration'] = (_0x5f2654 || 0x0) | 0x0;
    }
    function _0x1e8a09(_0x1e5746) {
        println('[TREKK]\x20action:\x20' + _0x1e5746 + ',\x20' + _0x3ed961['mediaPosition'] + '\x20|\x20' + _0x3ed961['mediaDuration']);
    }
    function _0x30f9c2(_0x5c957a) {
        if (_0x3ed961['live'])
            return;
        switch (_0x5c957a) {
        case 'READY':
            _0x1e8a09('init'),
            _0x1e8a09(_0x3ed961['live'] && 'live' || 'vod'),
            _0x1e8a09('hbbtv');
            break;
        case 'STARTED':
            _0x1e8a09('start\x20content'),
            _0x1e8a09('play'),
            setTimeout(function() {
                _0x1e8a09('play300');
            }, 0x12c);
            break;
        case 'SEEK':
            _0x1e8a09('seek');
            break;
        case 'PAUSE':
            _0x1e8a09('pause');
            break;
        case 'PLAY':
            _0x1e8a09('play');
            break;
        case 'END':
            _0x1e8a09('eof');
            break;
        default:
            println('[TREKK]\x20invalid\x20' + _0x5c957a, 'wrn');
            break;
        }
    }
    function _0xb9a9fc(_0x492044) {
        if (!_0x492044) {
            println('[TREKK]\x20missing\x20conf\x20in\x20init', 'wnr');
            return;
        }
        _0x2e46de = _0x39fc53(),
        _0x47952a = _0x38e83d(_0x492044['devKey']),
        _0x505865 = _0x492044['baseUrl'] || 'hbbtv://www.rai.tv/',
        _0x36574f = 'https://' + _0x492044['domain'] + '/' + _0x492044['id'],
        _0x41edf9 = 'https://' + _0x492044['testDomain'] + '/' + _0x492044['testId'],
        _0x191348 = !!_0x492044['enabled'],
        _0x13df15 = _0x492044['channels'],
        _0x5551b8 = _0x492044['uptimeSeconds'] || -0x1,
        _0x5bf37e = _0x492044['version'] || '',
        _0x11323a = _0x492044['delivery'] === 0x2 ? 'dtt' : _0x492044['delivery'] === 0x0 ? 'sat' : 'net',
        println('[TREKK]\x20' + (_0x191348 ? 'ON' : 'OFF') + '\x20|\x20sessionID:\x20' + _0x2e46de + '\x20(' + _0x11323a + ')\x20' + _0x5bf37e + '\x20|\x20uptime:\x20' + _0x5551b8 + 's\x20|\x20channels:\x20' + _0x13df15['join'](','), _0x191348 ? 'inf' : 'wrn');
    }
    return {
        'version': 0x3,
        'CG1': _0x282d29,
        'events': {
            'PRIVACY': _0x48f4aa,
            'PRIVACY_INFO': _0x1a85de,
            'TVPLUS': _0x31a706,
            'RAIPLAY': _0x5afbd9,
            'GENERIC': _0x2b2abf
        },
        'sections': {
            'ON_AIR': 'oraInOnda',
            'RAIPLAY': 'raiPlay',
            'TV_CHANNELS': 'canaliTv',
            'RADIO_CHANNELS': 'canaliRadio',
            'LAST_NEWS': 'rainews/tgUltimeEdizioni',
            'SETTINGS': 'supporto'
        },
        'init': _0xb9a9fc,
        'setUptime': _0x55be18,
        'setContentVOD': _0xbe9eae,
        'setPosition': _0x340141,
        'track': _0x2647bb,
        'trackAction': _0x30f9c2,
        'display': function() {
            return 'version:\x20' + _0x5bf37e + ',\x20delivery:\x20' + _0x11323a;
        }
    };
}()
  , $TaService = function() {
    var _0x4e57b0 = './resources/stream_events.dsmx', _0x1274d5 = 'urn:dvb:css:timeline:temi:0:', _0x4420b9 = 'urn:hbbtv:ta:profile:2019:2', _0x44cc4f = 'urn:hbbtv:ta:profile:2019:1', _0x3287e8 = 'https://www.raiplay.it/hbbtv/video/ta/FIAT500/manifest.mpd', _0x539666 = 'event_01', _0x102a2f, _0x5a0acf = ![], _0x2025c0, _0x264a4c, _0x5b3687;
    function _0x21cdc8() {
        println('|>\x20set\x20switch\x20BACK'),
        _0x102a2f['mediaSwitcher']['switchMediaPresentation'](_0x102a2f['video'], null, !![], 0x0, document['querySelector']('#video'), _0x4420b9)['then'](function(_0x454338) {
            println('[TA]\x20END:\x20' + _0x454338),
            _0x44a2ec();
        }, function(_0x4ead17) {
            println('[TA]\x20FAIL:\x20' + _0x4ead17, 'err');
        });
    }
    function _0x359bbc() {
        !_0x102a2f['mediaSwitcher'] && (_0x102a2f['mediaSwitcher'] = document['getElementById']('mswitch') || oipfObjectFactory['createMediaSwitcher']());
        var _0x2984fb = document['getElementById']('video')
          , _0x5a212e = _0x51e74c(_0x2984fb)
          , _0x574b76 = _0x102a2f['startTime'] | 0x0;
        println('[TA]\x20broadcast\x20state:\x20' + _0x2984fb['playState']),
        println('[TA]\x20broadband\x20state:\x20' + _0x102a2f['video']['readyState'] + '\x20' + _0x102a2f['video']['seeking']),
        println('[TA]\x20TEMI\x20timeline:\x20' + _0x5a212e + '\x20|\x20' + _0x574b76),
        _0x102a2f['mediaSwitcher']['switchMediaPresentation'](_0x2984fb, _0x5a212e, !![], _0x574b76, _0x102a2f['video'], _0x4420b9)['then'](function(_0x31cd7f) {
            _0x31cd7f ? (println('[TA]\x20fast\x20switch\x20api:\x20' + _0x31cd7f, 'err'),
            _0x44a2ec()) : (println('[TA]\x20fast\x20switch\x20api\x20completed'),
            _0x1fa9f0({
                'watermarks': [{
                    'type': 'img',
                    'name': 'resources/TA/rai.svg?v=1',
                    'x': 0x41,
                    'y': 0x25,
                    'width': 0x30,
                    'height': 0x30
                }]
            }),
            _0x102a2f['useSwitch'] && setTimeout(function() {
                _0x21cdc8();
            }, 0x7d0));
        }, function(_0x3bca29) {
            println('[TA]\x20fast\x20switch\x20api\x20ERROR:\x20' + _0x3bca29, 'err'),
            _0x44a2ec();
        });
    }
    function _0x16be06() {
        _0x102a2f['started'] = !![];
        if ($DEVICE['userAgentInfo']['vendorName'] === 'Panasonic') {
            if (document['querySelector']('object[type=\x22application/proprietaryfunctionprovider\x22]'))
                _0x359bbc();
            else {
                var _0x1840c4 = 'U2FsdGVkX195aeJqrdL6Ud+odPkxgieavyzFE86Ruf/JBh8Tkc4QgNf3EAn+m/Fairx8YK8w057xRbaJo/CLrqaiW/COCwxHNuWc457PbEx611B2IX8HJ5Cz3Ciqkk15JlQWKLvMVmla8RJXRzXdd2KpgbFTCXxGOaRygupc8Y1/nIhYKA0AA+LDKgIFdE2rOrhYcbj3GTtCZzOSymdL30q+LOJuA21eo0/YRc+frOgXAZERye99DZsr'
                  , _0x5e1658 = window['oipfObjectFactory']['createProprietaryFunctionProvider']()
                  , _0x1a2f6f = _0x5e1658['invokeFunction']('com.panasonic.hbbtv.targetedAdvertisment', 'enable', _0x1840c4);
                _0x1a2f6f['then'](function() {
                    println('[TA]\x20authentication\x20successful'),
                    _0x359bbc();
                }, function(_0x5f27e5) {
                    println('[TA]\x20authentication\x20failed:\x20' + _0x5f27e5, 'err');
                });
            }
        } else
            _0x359bbc();
    }
    function _0x1c0cdd() {}
    function _0x17d3d4() {
        println('[MSE]\x20onLoadedData'),
        _0x102a2f['video']['readyState'] === 0x4 && (_0x102a2f['loadedDataReceived'] = !![],
        !_0x102a2f['started'] && _0x102a2f['completed'] && _0x16be06());
    }
    function _0x2047a7() {
        println('[MSE]\x20onCanPlay');
    }
    function _0x244107() {
        println('[MSE]\x20onPlay'),
        _0x102a2f['playing'] = !![];
    }
    function _0x15a6b7() {
        _0x102a2f['video']['currentTime'] - _0x102a2f['currentTime'] >= 0x1 && (_0x102a2f['currentTime'] = _0x102a2f['video']['currentTime'],
        println('[MSE]\x20onTimeUpdate:\x20' + _0x102a2f['currentTime'] + '\x20|\x20' + _0x102a2f['video']['duration']));
    }
    function _0x4eee12() {
        println('[MSE]\x20onEnded'),
        _0x102a2f['playing'] = ![];
        if (!_0x102a2f['useSwitch'])
            setTimeout(function() {
                _0x44a2ec();
            }, 0x3e8);
        _0x5aacaf();
    }
    function _0x260a46() {
        println('[MSE]\x20onError', 'err'),
        _0x102a2f['playing'] = ![];
    }
    function _0x53f06d() {
        if (_0x102a2f['aborted']) {
            _0x44a2ec();
            return;
        }
        _0x102a2f['bufferIndex'] = (_0x102a2f['bufferIndex'] + 0x1) % _0x102a2f['buffers']['length'];
        var _0x114d8a = _0x102a2f['spotArray'][_0x102a2f['bufferIndex']]['chunks']['shift']();
        if (_0x114d8a)
            _0x102a2f['buffers'][_0x102a2f['bufferIndex']]['appendBuffer'](_0x114d8a['data']);
        else {
            println('[MSE]\x20buffer\x20loading\x20completed'),
            _0x102a2f['completed'] = !![];
            var _0x341329 = _0x102a2f['video']['buffered'];
            println('buffered.length=' + _0x341329['length']);
            for (var _0x3d99a1 = 0x0; _0x3d99a1 < _0x341329['length']; _0x3d99a1++) {
                println(_0x3d99a1 + '\x20|\x20' + _0x341329['start'](_0x3d99a1) + '-' + _0x341329['end'](_0x3d99a1));
            }
            _0x102a2f['mediaSource']['endOfStream'](),
            !_0x102a2f['started'] && _0x102a2f['loadedDataReceived'] && _0x16be06();
        }
    }
    function _0x1a3756() {
        println('[MSE]\x20buffer\x20abort', 'wrn');
    }
    function _0x59bb53() {
        println('[MSE]\x20buffer\x20error', 'err');
    }
    function _0x381b5f() {
        if (_0x102a2f['buffers'] && _0x102a2f['buffers']['length']) {
            println('[MSE]\x20source\x20already\x20open!', 'wrn');
            return;
        }
        println('[MSE]\x20on\x20source\x20open');
        _0x102a2f['video']['src'] && URL['revokeObjectURL'](_0x102a2f['video']['src']);
        _0x102a2f['buffers'] = [],
        _0x102a2f['bufferIndex'] = 0x0;
        for (var _0x31f58c = 0x0; _0x31f58c < _0x102a2f['spotArray']['length']; _0x31f58c++) {
            println('[MSE]\x20create\x20buffer\x20of\x20type:\x20' + (_0x102a2f['spotArray'][_0x31f58c]['mimeType'] + ';\x20codecs=\x22' + _0x102a2f['spotArray'][_0x31f58c]['codecs'] + '\x22'));
            var _0x575e2e = _0x102a2f['mediaSource']['addSourceBuffer'](_0x102a2f['spotArray'][_0x31f58c]['mimeType'] + ';\x20codecs=\x22' + _0x102a2f['spotArray'][_0x31f58c]['codecs'] + '\x22');
            _0x575e2e['addEventListener']('updateend', _0x53f06d),
            _0x575e2e['addEventListener']('abort', _0x1a3756),
            _0x575e2e['addEventListener']('error', _0x59bb53),
            _0x102a2f['buffers']['push'](_0x575e2e);
        }
        var _0x8cd69d = _0x102a2f['spotArray'][_0x102a2f['bufferIndex']]['chunks']['shift']();
        _0x102a2f['buffers'][_0x102a2f['bufferIndex']]['appendBuffer'](_0x8cd69d['data']);
    }
    function _0x515f0d() {}
    function _0x3b260e() {
        println('[MSE]\x20opening\x20media\x20source'),
        _0x102a2f['armed'] = !![],
        _0x102a2f['breakIndex'] = 0x0,
        _0x102a2f['started'] = ![],
        _0x102a2f['completed'] = ![],
        _0x102a2f['loadedDataReceived'] = ![];
        var _0x29a0c9 = document['getElementById']('spot-player');
        !_0x29a0c9 ? _0x29a0c9 = $MISC['html2Element']('<video\x20id=\x22spot-player\x22\x20style=\x22position:\x20absolute;\x20width:\x201280px;\x20height:\x20720px;\x20visibility:\x20hidden\x22></video>') : _0x29a0c9['style']['visibility'] = 'hidden';
        _0x29a0c9['addEventListener']('loadedmetadata', _0x1c0cdd),
        _0x29a0c9['addEventListener']('loadeddata', _0x17d3d4),
        _0x29a0c9['addEventListener']('canplay', _0x2047a7),
        _0x29a0c9['addEventListener']('play', _0x244107),
        _0x29a0c9['addEventListener']('timeupdate', _0x15a6b7),
        _0x29a0c9['addEventListener']('ended', _0x4eee12),
        _0x29a0c9['addEventListener']('error', _0x260a46),
        _0x102a2f['video'] = _0x29a0c9;
        var _0x457954 = new MediaSource();
        _0x457954['addEventListener']('sourceopen', _0x381b5f),
        _0x457954['addEventListener']('sourceclose', _0x515f0d),
        _0x102a2f['mediaSource'] = _0x457954,
        _0x29a0c9['src'] = URL['createObjectURL'](_0x457954),
        document['body']['insertBefore'](_0x29a0c9, document['getElementById']('video'));
    }
    function _0x44a2ec() {
        _0x5aacaf(),
        _0x102a2f['started'] = ![],
        _0x102a2f['completed'] = ![],
        _0x102a2f['loadedDataReceived'] = ![],
        _0x102a2f['playing'] = ![],
        _0x102a2f['aborted'] = ![],
        _0x102a2f['currentTime'] = 0x0,
        delete _0x102a2f['startTime'],
        delete _0x102a2f['spotArray'];
        if (_0x102a2f['buffers']) {
            for (var _0x279831 = 0x0; _0x279831 < _0x102a2f['buffers']['length']; _0x279831++) {
                _0x102a2f['buffers'][_0x279831]['removeEventListener']('updateend', _0x53f06d),
                _0x102a2f['buffers'][_0x279831]['removeEventListener']('abort', _0x1a3756),
                _0x102a2f['buffers'][_0x279831]['removeEventListener']('error', _0x59bb53);
            }
            _0x102a2f['buffers']['length'] = 0x0;
        }
        _0x102a2f['mediaSource']['removeEventListener']('sourceopen', _0x381b5f),
        _0x102a2f['mediaSource']['removeEventListener']('sourceclose', _0x515f0d),
        delete _0x102a2f['mediaSource'],
        _0x102a2f['video']['removeEventListener']('loadedmetadata', _0x1c0cdd),
        _0x102a2f['video']['removeEventListener']('loadeddata', _0x17d3d4),
        _0x102a2f['video']['removeEventListener']('canplay', _0x2047a7),
        _0x102a2f['video']['removeEventListener']('play', _0x244107),
        _0x102a2f['video']['removeEventListener']('timeupdate', _0x15a6b7),
        _0x102a2f['video']['removeEventListener']('ended', _0x4eee12),
        _0x102a2f['video']['removeEventListener']('error', _0x260a46),
        _0x102a2f['video']['src'] = '',
        _0x102a2f['armed'] = ![],
        println('[MSE]\x20closed\x20media\x20source');
    }
    function _0x4d3927() {
        if (!window['oipfObjectFactory'])
            return {
                'ok': ![],
                'error': 'missing\x20OIPF\x20factory'
            };
        if ($DEVICE['userAgentInfo']['version'] < '1.6.1')
            return {
                'ok': ![],
                'error': 'hbbTv\x20version\x20not\x20supported'
            };
        var _0x49721d = document['querySelector']('object[type=\x22application/oipfCapabilities\x22]');
        if (!_0x49721d) {
            oipfObjectFactory['isObjectSupported']('application/oipfCapabilities') && (_0x49721d = oipfObjectFactory['createCapabilitiesObject']());
            if (!_0x49721d)
                return {
                    'ok': ![],
                    'error': 'missing\x20configuration\x20object'
                };
        }
        _0x49721d = _0x49721d['xmlCapabilities'];
        if (!_0x49721d)
            return {
                'ok': ![],
                'error': 'missing\x20xmlCapabilities\x20field'
            };
        _0x49721d = _0x49721d['documentElement']['getElementsByTagName']('ta');
        if (!_0x49721d || !_0x49721d['length'])
            return {
                'ok': ![],
                'error': 'ta\x20tag\x20not\x20found'
            };
        for (var _0x31a2a1 = 0x0; _0x31a2a1 < _0x49721d['length']; _0x31a2a1++) {
            if (_0x49721d[_0x31a2a1]['getAttribute']('GOPIndependentSwitchToBroadcast') === 'true') {
                if (!oipfObjectFactory['isObjectSupported']('application/hbbtvMediaSynchroniser'))
                    return {
                        'ok': ![],
                        'error': 'media\x20sync\x20not\x20supported'
                    };
                if (!oipfObjectFactory['isObjectSupported']('application/hbbtvMediaSwitcher'))
                    return {
                        'ok': ![],
                        'error': 'media\x20fast\x20switch\x20api\x20not\x20supported'
                    };
                var _0x51dac5 = _0x49721d[_0x31a2a1]['getElementsByTagName']('profile')
                  , _0x4ce30d = ![]
                  , _0x4b810a = ![];
                if (_0x51dac5)
                    for (var _0x4c64d5 = 0x0; _0x4c64d5 < _0x51dac5['length']; _0x4c64d5++) {
                        if (!_0x51dac5[_0x4c64d5])
                            continue;
                        if (_0x51dac5[_0x4c64d5]['textContent'] === _0x4420b9)
                            _0x4ce30d = !![];
                        else {
                            if (_0x51dac5[_0x4c64d5]['textContent'] === _0x44cc4f)
                                _0x4b810a = !![];
                        }
                    }
                return {
                    'ok': !![],
                    'double': _0x4ce30d,
                    'single': _0x4b810a
                };
            }
        }
        return {
            'ok': ![],
            'error': 'insufficient\x20resources'
        };
    }
    function _0x51e74c(_0x2bf9ca) {
        var _0x5bd348 = _0x2bf9ca['currentChannel'];
        if (_0x5bd348)
            return _0x1274d5 + _0x5bd348['majorChannel'];
    }
    function _0x59d835(_0x1dfda4, _0xf8018f) {
        _0xf8018f = _0xf8018f || {};
        var _0x566edb = _0x1dfda4['nodeName'], _0x4692b0 = _0x1dfda4['attributes'], _0x2a723d = _0x1dfda4['childNodes'], _0x2ca1cc, _0x90435e, _0x517ecc;
        _0xf8018f[_0x566edb] === undefined ? _0x2ca1cc = _0xf8018f[_0x566edb] = {} : (_0x2ca1cc = {},
        Array['isArray'](_0xf8018f[_0x566edb]) ? _0xf8018f[_0x566edb]['push'](_0x2ca1cc) : _0xf8018f[_0x566edb] = [_0xf8018f[_0x566edb], _0x2ca1cc]);
        for (_0x90435e = 0x0; _0x90435e < _0x4692b0['length']; _0x90435e++) {
            _0x2ca1cc[_0x4692b0[_0x90435e]['name']] = _0x4692b0[_0x90435e]['value'];
        }
        if (_0x1dfda4['nodeType'] === Node['ELEMENT_NODE'])
            for (_0x90435e = 0x0; _0x90435e < _0x2a723d['length']; _0x90435e++) {
                if (_0x2a723d[_0x90435e]['nodeType'] === Node['ELEMENT_NODE'])
                    _0x59d835(_0x2a723d[_0x90435e], _0x2ca1cc);
                else
                    _0x2a723d[_0x90435e]['nodeType'] === Node['TEXT_NODE'] ? (_0x517ecc = _0x2a723d[_0x90435e]['nodeValue'],
                    typeof _0x517ecc === 'string' && (_0x517ecc = _0x517ecc['trim']()) && (_0x2ca1cc['_text_'] = _0x517ecc)) : console['warn'](_0x2a723d[_0x90435e]['nodeName'], _0x2a723d[_0x90435e]['nodeType']);
            }
        return _0xf8018f;
    }
    function _0x3b55f3(_0x3b2e58) {
        var _0xbe572f = _0x3b2e58['match'](/^.*\//);
        return _0xbe572f[0x0];
    }
    function _0x4f3644(_0x1f3175) {
        if (_0x1f3175['length']) {
            var _0x84136f, _0x4c2683 = 0x0, _0x4f26fa, _0x54932a;
            for (_0x4f26fa = 0x0; _0x4f26fa < _0x1f3175['length']; _0x4f26fa++) {
                _0x54932a = parseInt(_0x1f3175[_0x4f26fa]['bandwidth'], 0xa),
                _0x54932a > _0x4c2683 && (_0x4c2683 = _0x54932a,
                _0x84136f = _0x1f3175[_0x4f26fa]);
            }
            return _0x84136f;
        } else
            return _0x1f3175;
    }
    function _0x258f8e(_0x5abc12, _0x52c454) {
        var _0x2c38f2, _0x44e1ae, _0x24f123, _0x3ed273, _0x5a289f, _0x554930, _0x5c4d1a;
        if (_0x5abc12['SegmentTemplate']) {
            _0x2c38f2 = _0x5abc12['SegmentTemplate'],
            _0x44e1ae = parseInt(_0x2c38f2['duration']) / parseInt(_0x2c38f2['timescale']),
            _0x24f123 = parseInt(_0x2c38f2['startNumber']),
            _0x3ed273 = _0x4f3644(_0x5abc12['Representation']),
            _0x5a289f = [],
            _0x5a289f['push']({
                'type': 'init',
                'url': _0x2c38f2['initialization']['replace']('$RepresentationID$', _0x3ed273['id'])
            }),
            _0x554930 = _0x52c454 / _0x44e1ae;
            for (_0x5c4d1a = 0x0; _0x5c4d1a < _0x554930; _0x5c4d1a++) {
                _0x5a289f['push']({
                    'type': 'media',
                    'url': _0x2c38f2['media']['replace']('$RepresentationID$', _0x3ed273['id'])['replace']('$Number$', (_0x24f123 + _0x5c4d1a)['toString']())
                });
            }
            return {
                'mimeType': _0x3ed273['mimeType'],
                'codecs': _0x3ed273['codecs'],
                'chunks': _0x5a289f
            };
        }
    }
    function _0x5007ae(_0x8c78b4, _0x468b96) {
        var _0x26fbbb = new DOMParser()
          , _0xbf1ac8 = _0x26fbbb['parseFromString'](_0x8c78b4, 'application/xml');
        _0xbf1ac8 = _0xbf1ac8['documentElement'];
        if (_0xbf1ac8['tagName'] === 'MPD')
            return _0x59d835(_0xbf1ac8, {
                'url': _0x468b96,
                'type': 'application/dash+xml',
                'date': Date['now']()
            });
    }
    function _0x133ad7(_0x3fc56b, _0x4f249b) {
        function _0x1ce66a(_0x56ffe7) {
            var _0x5b29f8 = (_0x56ffe7['status'] / 0x64 | 0x0) !== 0x2;
            return {
                'code': _0x56ffe7['status'],
                'errorFlag': _0x5b29f8,
                'text': _0x5b29f8 ? _0x56ffe7['statusText'] : _0x56ffe7['response'],
                'type': _0x56ffe7['getResponseHeader']('Content-Type'),
                'url': _0x56ffe7['responseURL']
            };
        }
        var _0x21c245 = new XMLHttpRequest();
        _0x21c245['open']('GET', _0x3fc56b),
        _0x21c245['responseType'] = 'arraybuffer',
        _0x21c245['send'](null),
        _0x21c245['onload'] = function() {
            _0x4f249b(_0x1ce66a(this));
        }
        ,
        _0x21c245['onerror'] = function() {
            _0x4f249b(_0x1ce66a(this));
        }
        ;
    }
    function _0x14c940(_0x270f5b, _0x10a579, _0x8633b9) {
        var _0x4ce82b = _0x270f5b['chunks']['length'];
        for (var _0x4f1e9a = 0x0; _0x4f1e9a < _0x270f5b['chunks']['length']; _0x4f1e9a++) {
            (function(_0x293618, _0x378f28) {
                _0x133ad7(_0x8633b9 + _0x293618['url'], function(_0x4f1dbe) {
                    _0x293618['status'] = _0x4f1dbe['errorFlag'] ? 'fail' : 'ok',
                    _0x293618['index'] = _0x378f28;
                    if (!_0x4f1dbe['errorFlag'])
                        _0x293618['data'] = _0x4f1dbe['text'];
                    println('[TA]\x20' + _0x378f28 + '\x20|\x20' + _0x270f5b['mimeType'] + '\x20|\x20' + _0x4f1dbe['url'] + '\x20|\x20' + _0x293618['status'], _0x4f1dbe['errorFlag'] ? 'err' : 'inf'),
                    _0x4ce82b--;
                    if (_0x4ce82b === 0x0)
                        _0x10a579(_0x270f5b);
                });
            }(_0x270f5b['chunks'][_0x4f1e9a], _0x4f1e9a));
        }
    }
    function _0x5cb074(_0x53a5b6, _0xa9555c) {
        println('[TA]\x20download\x20break\x20' + _0x53a5b6),
        _0x102a2f['downloading'] = !![],
        $Net['http'](_0x53a5b6)['get']({
            'resolve': function(_0x29f46b) {
                if (!_0x29f46b['errorFlag']) {
                    var _0x31bce8 = _0x5007ae(_0x29f46b['text'], _0x53a5b6), _0x59b4cd = _0x31bce8['MPD']['Period']['AdaptationSet'], _0x3d8d1c = _0x3b55f3(_0x31bce8['url']), _0x3c7452 = _0x59b4cd['length'], _0xc0eab2 = {}, _0x2ea74d = 0x0, _0x416f45, _0x43d1d7;
                    for (_0x416f45 = 0x0; _0x416f45 < _0x3c7452; _0x416f45++) {
                        _0x43d1d7 = _0x258f8e(_0x59b4cd[_0x416f45], 0xf),
                        _0x102a2f['currentBreak'] === 0x0 && (_0x102a2f['logic'][_0x43d1d7['mimeType']] = {
                            'ready': ![],
                            'defaultSampleDuration': 0x0,
                            'earliestPresentationTime': 0x0,
                            'baseMediaDecodeTime': 0x0,
                            'total': 0x0
                        }),
                        println('[TA]\x20downloading\x20spot\x20#' + (_0x416f45 + 0x1) + '\x20' + _0x43d1d7['mimeType']),
                        _0x14c940(_0x43d1d7, function(_0xc92ff7) {
                            _0x102a2f['downloading'] = ![],
                            println('[TA]\x20downloaded\x20' + _0xc92ff7['mimeType'] + ',\x20segments:\x20' + _0xc92ff7['chunks']['length']),
                            _0xc0eab2[_0xc92ff7['mimeType']] = _0xc92ff7,
                            _0x2ea74d++,
                            _0x2ea74d === _0x3c7452 && (_0xc0eab2 = [_0xc0eab2['video/mp4'], _0xc0eab2['audio/mp4']],
                            _0xa9555c(_0xc0eab2));
                        }, _0x3d8d1c);
                    }
                    _0x102a2f['currentBreak']++;
                } else
                    println('failed\x20to\x20download\x20spot:\x20' + _0x29f46b['code'], 'err');
            },
            'reject': function() {
                println('failed\x20to\x20download\x20spot', 'err');
            }
        });
    }
    function _0x49a751(_0x2e7e13, _0x3ad43f) {
        if (_0x264a4c && _0x264a4c[_0x2e7e13])
            for (var _0x4e55aa = 0x0; _0x4e55aa < _0x264a4c[_0x2e7e13]['length']; _0x4e55aa++) {
                _0x264a4c[_0x2e7e13][_0x4e55aa](_0x3ad43f);
            }
    }
    function _0x4d05a5(_0x21aaf6) {
        _0x21aaf6['status'] === 'trigger' ? _0x21aaf6['name'] !== _0x539666 ? println('[TA]\x20stream\x20event\x20received\x20' + _0x21aaf6['name'] + '\x20but\x20should\x20be\x20' + _0x539666, 'wrn') : _0x49a751('echo', _0x21aaf6) : println('[TA]\x20' + _0x21aaf6['status'], 'err');
    }
    function _0x52cbd3(_0x1866b5) {
        if (!_0x1866b5 || !_0x5b3687)
            return;
        var _0x191325 = _0x1866b5['onid'] + '.' + _0x1866b5['tsid'] + '.' + _0x1866b5['sid'];
        if (_0x191325 !== _0x2025c0) {
            _0x2025c0 = _0x191325;
            if (_0x1866b5['onid']) {
                if (document['getElementById']('video')['playState'] === 0x3) {
                    println('[TA]\x20broadcast\x20STOPPED,\x20skip');
                    return;
                }
                var _0x288bfc = $StreamEventManager['request'](_0x5b3687, _0x4e57b0, _0x539666);
                if (_0x288bfc['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
                    _0x5a0acf = !![];
                println('[TA]\x20stream\x20event\x20resource\x20' + _0x288bfc['text'], _0x5a0acf ? 'out' : 'wrn');
                if (!!_0x3d0fb3)
                    _0x3d0fb3['onChannelChanged'](_0x1866b5);
            }
            _0x102a2f && _0x102a2f['playing'] && (println('[TA]\x20stop\x20current\x20break'),
            _0x102a2f['video']['pause'](),
            _0x44a2ec());
        }
    }
    function _0x53cac6(_0x49edd3, _0x4f2c17) {
        if (_0x49edd3 === $StreamEventManager['RESOURCE_DATA'])
            _0x4d05a5(_0x4f2c17);
        else {
            println('[TA]\x20stream\x20event\x20resource:\x20' + _0x4f2c17);
            if (_0x49edd3 === $StreamEventManager['RESOURCE_ADQUIRED'])
                _0x5a0acf = !![];
            else
                (_0x49edd3 === $StreamEventManager['RESOURCE_RELEASED'] || _0x49edd3 === $StreamEventManager['RESOURCE_LOST']) && (_0x5a0acf = ![]);
        }
    }
    function _0x266631(_0xc7e737) {
        if (_0x5b3687)
            return;
        _0x5b3687 = $StreamEventManager['sign'](0x1, _0x53cac6);
        var _0x33e68b = $VideoManager['getInstance']()['_video']['currentChannel'];
        if (!_0x33e68b)
            return;
        _0x2025c0 = _0x33e68b['onid'] + '.' + _0x33e68b['tsid'] + '.' + _0x33e68b['sid'],
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](_0x52cbd3);
        var _0x10ad31 = _0x4d3927();
        println('[TA]\x20spot\x20replacement:\x20' + (_0x10ad31['ok'] ? '' : 'NOT\x20') + 'SUPPORTED' + (_0x10ad31['error'] && '\x20|\x20' + _0x10ad31['error'] || ''), _0x10ad31['error'] ? 'wrn' : 'inf'),
        _0x102a2f = {
            'support': _0x10ad31,
            'useSwitch': $DEVICE['userAgentInfo']['vendorName'] === 'Philips',
            'currentBreak': 0x0,
            'currentTime': 0x0,
            'logic': {}
        },
        _0x10cd3e()['init']();
        if (_0xc7e737)
            _0x244b50();
    }
    function _0x244b50() {
        if (_0x5b3687 && !_0x5a0acf) {
            var _0x28b4b3 = $StreamEventManager['request'](_0x5b3687, _0x4e57b0, _0x539666);
            if (_0x28b4b3['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
                _0x5a0acf = !![];
            println('[TA]\x20stream\x20event\x20resource\x20' + _0x28b4b3['text'], _0x5a0acf ? 'out' : 'wrn');
        }
    }
    function _0x372849() {
        _0x5b3687 && _0x5a0acf && $StreamEventManager['release'](_0x5b3687);
    }
    function _0x46bb64(_0x5192a9, _0x39bd16) {
        if (typeof _0x39bd16 !== 'function')
            return;
        if (!_0x264a4c)
            _0x264a4c = {};
        if (!_0x264a4c[_0x5192a9])
            _0x264a4c[_0x5192a9] = [];
        _0x264a4c[_0x5192a9]['push'](_0x39bd16);
    }
    function _0x750211(_0x31de35, _0x3afcd9, _0x1079d8, _0x4ad6fa) {
        _0x31de35 = _0x31de35 * 0x3e8;
        var _0x3b09d6 = [{
            'r': 0.25,
            'n': 'firstQuartile'
        }, {
            'r': 0.5,
            'n': 'midpoint'
        }, {
            'r': 0.75,
            'n': 'thirdQuartile'
        }], _0x4aa3b5 = function(_0x1f029e, _0x3a20d8, _0x17a1a8) {
            var _0x43a2a5 = new Image();
            _0x43a2a5['src'] = _0x1f029e,
            _0x43a2a5['onload'] = function() {
                console['log']('[VAST]\x20ok:' + _0x3a20d8 + '\x20at\x20' + _0x17a1a8);
            }
            ,
            _0x43a2a5['onerror'] = function() {
                console['log']('[VAST]\x20err:' + _0x3a20d8 + '\x20at\x20' + _0x17a1a8);
            }
            ;
        }, _0x234a4e = function(_0x24ecd4, _0x32b6d3) {
            setTimeout(function() {
                for (var _0x4fcd10 = 0x0; _0x4fcd10 < _0x1079d8['length']; _0x4fcd10++) {
                    _0x1079d8[_0x4fcd10] && _0x1079d8[_0x4fcd10]['name'] === _0x24ecd4 && _0x4aa3b5(_0x1079d8[_0x4fcd10]['url'], _0x24ecd4, _0x32b6d3);
                }
            }, 0xa);
        }, _0xc2918a = 0x0, _0x46f2d0, _0x142f32 = function() {
            var _0x5b24e4 = 0x0
              , _0x1a8e4b = 0x0
              , _0x2bc5eb = performance['now']();
            _0x46f2d0 = setInterval(function() {
                _0xc2918a === 0x0 ? _0x234a4e('start', _0xc2918a) : (_0x1a8e4b = _0xc2918a / _0x31de35,
                _0x5b24e4 < _0x3b09d6['length'] && _0x1a8e4b >= _0x3b09d6[_0x5b24e4]['r'] && (_0x234a4e(_0x3b09d6[_0x5b24e4]['n'], _0xc2918a),
                _0x5b24e4 += 0x1));
                var _0x2a7b0a = performance['now']()
                  , _0x5252e1 = _0x2a7b0a - _0x2bc5eb;
                _0x2bc5eb = _0x2a7b0a,
                _0xc2918a += _0x5252e1,
                _0xc2918a >= _0x31de35 && (clearInterval(_0x46f2d0),
                _0x4ad6fa('ended'),
                _0x234a4e('complete', _0xc2918a));
            }, 0xfa),
            _0x4ad6fa('start');
            for (var _0x1e4488 = 0x0; _0x1e4488 < _0x3afcd9['length']; _0x1e4488++) {
                _0x4aa3b5(_0x3afcd9[_0x1e4488], 'impressions', _0xc2918a);
            }
        };
        return {
            'isRunning': function() {
                return !!_0x46f2d0;
            },
            'getTime': function() {
                return _0xc2918a / 0x3e8;
            },
            'start': _0x142f32,
            'stop': function() {
                if (!_0x46f2d0)
                    return;
                clearInterval(_0x46f2d0),
                _0x46f2d0 = null,
                _0x4ad6fa('stopped');
            }
        };
    }
    function _0xd0db60(_0x2ec185) {
        _0x2ec185 = _0x2ec185 || 'https://ad.sxp.smartclip.net/select?type=dyn&ple=test.atv.de.smartclip~~1x1&fwd_sz=1x1&cu_env=test&fmt=all&cu_demo=rai&hv=&rnd=53057532&uuid=FB8C020A-6F29-F262-0E00-6FAF02AA223C&ang_wfmt=1280x720&opt=in&wlist=',
        println('url:' + _0x2ec185),
        $Player['vastparser']['parseURL'](_0x2ec185, function(_0xcc6262, _0x1959df) {
            if (_0x1959df)
                println('error\x20retrieving\x20l-shape\x20banner', 'err');
            else {
                println('found\x20vast\x20object\x20with\x20' + _0xcc6262['ads']['length'] + '\x20ads');
                if (!_0xcc6262['ads']['length'])
                    return;
                var _0x471cd5 = _0xcc6262['ads']['shift'](), _0x156363, _0xcbb7b9, _0x5d695a;
                if (!_0x471cd5)
                    return;
                _0x156363 = _0x471cd5['getNonLinear'] && _0x471cd5['getNonLinear']();
                if (!_0x156363 || !_0x156363['nonLinear'] || !_0x156363['nonLinear']['length'])
                    return;
                _0xcbb7b9 = _0x156363['events'],
                _0x156363 = _0x156363['nonLinear'][0x0],
                _0x5d695a = _0x156363['params'];
                if (!_0x5d695a)
                    return;
                if (_0x5d695a['adformat'] === 'xxl') {
                    var _0x3db5eb = $SceneTA['getInstance']()
                      , _0x5705d1 = _0x750211($Player['utils']['toSeconds'](_0x156363['minSuggestedDuration']), _0x471cd5['getImpressions'](), _0xcbb7b9, function(_0x4693be) {
                        if (_0x4693be === 'ended')
                            _0x3db5eb['_visible'] = ![];
                    });
                    _0x5705d1['actionObj'] = {
                        'ms': _0x5d695a['msurl'],
                        'action': _0x5d695a['ctaction']
                    };
                    var _0x1674b7 = _0x3db5eb['addPreloadListener'](function() {
                        _0x5705d1['start'](),
                        _0x3db5eb['removePreloadListener'](_0x1674b7);
                    });
                    _0x3db5eb['setData'](_0x5d695a['creativeurl'], {
                        'width': parseInt(_0x5d695a['width'], 0xa),
                        'height': parseInt(_0x5d695a['height'], 0xa)
                    }, _0x5705d1),
                    _0x3db5eb['_visible'] = !![];
                }
            }
        });
    }
    function _0x1fa9f0(_0x4028f4) {
        _0x102a2f['watermarks'] = [];
        for (var _0x2833c6 = 0x0, _0x54ad72; _0x2833c6 < _0x4028f4['watermarks']['length']; _0x2833c6++) {
            if (_0x4028f4['watermarks'][_0x2833c6]['type'] === 'img')
                _0x102a2f['watermarks']['push'](_0x2833c6),
                _0x54ad72 = $MISC['html2Element']('<img\x20id=\x22_ta_spwk' + _0x2833c6 + '\x22\x20' + 'src=\x22' + _0x4028f4['watermarks'][_0x2833c6]['name'] + '\x22\x20alt=\x22\x22\x20' + 'width=\x22' + _0x4028f4['watermarks'][_0x2833c6]['width'] + '\x22\x20' + 'height=\x22' + _0x4028f4['watermarks'][_0x2833c6]['height'] + '\x22\x20style=\x22position:\x20absolute;\x20top:\x20' + _0x4028f4['watermarks'][_0x2833c6]['y'] + 'px;\x20' + 'left:\x20' + _0x4028f4['watermarks'][_0x2833c6]['x'] + 'px\x22/>');
            else
                _0x4028f4['watermarks'][_0x2833c6]['type'] === 'label' && (_0x102a2f['watermarks']['push'](_0x2833c6),
                _0x54ad72 = $MISC['html2Element']('<div\x20id=_ta_spwk' + _0x2833c6 + '\x20style=\x22position:\x20absolute;\x20background-color:\x20yellow;' + 'left:\x20' + _0x4028f4['watermarks'][_0x2833c6]['x'] + 'px;\x20' + 'top:\x20' + _0x4028f4['watermarks'][_0x2833c6]['y'] + 'px;\x22\x22>' + _0x4028f4['watermarks'][_0x2833c6]['text'] + '</div>'));
            if (_0x54ad72)
                document['body']['insertBefore'](_0x54ad72, document['getElementById']('mainFrame'));
        }
    }
    function _0x5aacaf() {
        if (_0x102a2f['watermarks']) {
            for (var _0x53c15a = 0x0, _0x38d148; _0x53c15a < _0x102a2f['watermarks']['length']; _0x53c15a++) {
                _0x38d148 = document['getElementById']('_ta_spwk' + _0x102a2f['watermarks'][_0x53c15a]);
                if (_0x38d148)
                    _0x38d148['parentNode']['removeChild'](_0x38d148);
            }
            _0x102a2f['watermarks'] = null;
        }
    }
    function _0x382436() {
        _0x102a2f['aborted'] = ![],
        println('[TA]\x20start\x20sport\x20replacement', 'inf'),
        _0x5cb074(_0x3287e8, function(_0x18a975) {
            if (_0x102a2f['aborted'])
                return;
            for (var _0x300951 = 0x0; _0x300951 < _0x18a975['length']; _0x300951++) {
                for (var _0xbcbce8 = 0x0; _0xbcbce8 < _0x18a975[_0x300951]['chunks']['length']; _0xbcbce8++) {
                    if (_0x18a975[_0x300951]['chunks'][_0xbcbce8]['status'] !== 'ok') {
                        println('[TA]\x20download\x20failed', 'err');
                        return;
                    }
                }
            }
            _0x102a2f['spotArray'] = _0x18a975,
            _0x102a2f['startTime'] = 0x96,
            _0x3b260e();
        });
    }
    function _0x21aca6() {
        if (!_0x102a2f || !_0x102a2f['support'] || !_0x102a2f['support']['ok'])
            return;
        _0x102a2f['aborted'] = !![];
        if (_0x102a2f['started']) {
            println('[TA]\x20abort\x20sport\x20replacement', 'wrn');
            if (_0x102a2f['playing'])
                _0x102a2f['video']['pause']();
            _0x44a2ec();
        }
    }
    var _0x3d0fb3;
    function _0x4164d9() {
        function _0xa2a994(_0x345eaa) {
            return (_0x345eaa < 0xa ? '0' : '') + _0x345eaa;
        }
        function _0x38b29f() {
            var _0x4ab4ed = new Date();
            return _0x4ab4ed['getFullYear']() + '-' + _0xa2a994(_0x4ab4ed['getMonth']() + 0x1) + '-' + _0xa2a994(_0x4ab4ed['getDate']()) + '\x20' + _0xa2a994(_0x4ab4ed['getHours']()) + ':' + _0xa2a994(_0x4ab4ed['getMinutes']()) + ':' + _0xa2a994(_0x4ab4ed['getSeconds']());
        }
        function _0x49a5e2() {
            var _0x2c75b0 = '';
            for (var _0x18aa89 = 0x0; _0x18aa89 < 0x20; _0x18aa89++) {
                var _0x4598c0 = Math['random']() * 0x10 | 0x0;
                (_0x18aa89 === 0x8 || _0x18aa89 === 0xc || _0x18aa89 === 0x10 || _0x18aa89 === 0x14) && (_0x2c75b0 += '-'),
                _0x2c75b0 += (_0x18aa89 === 0xc ? 0x4 : _0x18aa89 === 0x10 ? _0x4598c0 & 0x3 | 0x8 : _0x4598c0)['toString'](0x10);
            }
            return _0x2c75b0;
        }
        function _0x2004d4() {
            var _0x287de3 = $StorageManager['getInstance']()['read']('hbbtv.raiplay.rdid');
            return !_0x287de3 && (_0x287de3 = _0x49a5e2(),
            $StorageManager['getInstance']()['write']('hbbtv.raiplay.rdid', _0x287de3)),
            _0x287de3;
        }
        function _0x1baf34(_0x48f75c, _0x1aed51) {
            function _0x250818(_0x5e5c9c, _0x38bab1) {
                var _0x38ab8f = _0x38bab1['_nowMs']
                  , _0x9ac7e4 = [];
                for (var _0x31bda8 = 0x0; !!_0x5e5c9c && _0x31bda8 < _0x5e5c9c['length']; _0x31bda8++) {
                    if (!!_0x5e5c9c[_0x31bda8]) {
                        var _0x4e07b7 = _0x38bab1['_nowDate'];
                        _0x4e07b7['setFullYear'](parseInt(_0x5e5c9c[_0x31bda8]['day']['substring'](0x6, 0xa), 0xa), parseInt(_0x5e5c9c[_0x31bda8]['day']['substring'](0x3, 0x5), 0xa) - 0x1, parseInt(_0x5e5c9c[_0x31bda8]['day']['substring'](0x0, 0x2), 0xa)),
                        _0x4e07b7['setHours'](parseInt(_0x5e5c9c[_0x31bda8]['hour']['substring'](0x0, 0x2), 0xa), parseInt(_0x5e5c9c[_0x31bda8]['hour']['substring'](0x3, 0x5), 0xa), 0x0),
                        _0x4e07b7 = _0x4e07b7['getTime']();
                        var _0x502344 = (parseInt(_0x5e5c9c[_0x31bda8]['duration']['substring'](0x0, 0x2), 0xa) * 0xe10 + parseInt(_0x5e5c9c[_0x31bda8]['duration']['substring'](0x3, 0x5), 0xa) * 0x3c + parseInt(_0x5e5c9c[_0x31bda8]['duration']['substring'](0x6, 0x8), 0xa)) * 0x3e8;
                        if (_0x38ab8f < _0x4e07b7 + _0x502344)
                            _0x9ac7e4['push']({
                                's': _0x4e07b7,
                                'e': _0x4e07b7 + _0x502344,
                                'g': _0x5e5c9c[_0x31bda8]['dfp'] && _0x5e5c9c[_0x31bda8]['dfp']['escaped_genre_name'],
                                'n': _0x5e5c9c[_0x31bda8]['dfp'] && _0x5e5c9c[_0x31bda8]['dfp']['escaped_name'],
                                't': _0x5e5c9c[_0x31bda8]['dfp'] && _0x5e5c9c[_0x31bda8]['dfp']['escaped_typology_name']
                            });
                    }
                }
                return _0x9ac7e4;
            }
            var _0x313008 = {};
            try {
                var _0x57ed90 = JSON['parse'](_0x48f75c);
                _0x313008['date'] = _0x57ed90['date'],
                _0x313008['epg'] = [];
                for (var _0x15e147 = 0x0; _0x15e147 < _0x57ed90['epg']['length']; _0x15e147++) {
                    _0x313008['epg']['push']({
                        'channel': _0x57ed90['epg'][_0x15e147]['channel']['toLowerCase'](),
                        'events': _0x250818(_0x57ed90['epg'][_0x15e147]['events'], _0x1aed51)
                    });
                }
                return _0x313008;
            } catch (_0x14fbe8) {
                println('[EXAUDI]\x20error\x20parsing\x20json', 'err');
            }
        }
        var _0x581a3d;
        function _0x99679a(_0x118f17, _0x1c2a5a) {
            var _0x3bd5c4 = $TimeManager['getInstance']()
              , _0x32e2a0 = _0x3bd5c4['_nowDate']
              , _0xed9830 = !_0x1c2a5a && $StorageManager['getInstance']()['read']('hbbtv.tvhub.epglite');
            if (!!_0xed9830)
                try {
                    _0x581a3d = JSON['parse'](_0xed9830),
                    _0x581a3d['date'] !== _0xa2a994(_0x32e2a0['getDate']()) + '-' + _0xa2a994(_0x32e2a0['getMonth']() + 0x1) + '-' + _0x32e2a0['getFullYear']() ? (println('[EXAUDI]\x20stale\x20epg', 'wrn'),
                    _0x581a3d = null) : println('[EXAUDI]\x20using\x20lite\x20epg\x20from\x20cache');
                } catch (_0x3a682d) {
                    println('[EXAUDI]\x20error\x20loading\x20epg\x20lite', 'err');
                }
            if (!_0x581a3d) {
                var _0x23418d = new Date(_0x3bd5c4['_nowMs'] - 0x5265c00)
                  , _0x157b64 = 'https://www.raiplay.it/palinsesto/light/[previous_date]/[current_date]/canali.json'['replace']('[previous_date]', _0xa2a994(_0x23418d['getDate']()) + '-' + _0xa2a994(_0x23418d['getMonth']() + 0x1) + '-' + _0x23418d['getFullYear']())['replace']('[current_date]', _0xa2a994(_0x32e2a0['getDate']()) + '-' + _0xa2a994(_0x32e2a0['getMonth']() + 0x1) + '-' + _0x32e2a0['getFullYear']());
                println('[EXAUDI]\x20downloading\x20epg...'),
                $Net['http'](_0x157b64)['get']({
                    'resolve': function(_0x5d610a) {
                        !_0x5d610a['errorFlag'] && (_0x581a3d = _0x1baf34(_0x5d610a['text'], _0x3bd5c4),
                        $StorageManager['getInstance']()['write']('hbbtv.tvhub.epglite', JSON['stringify'](_0x581a3d))),
                        _0x118f17(!!_0x581a3d);
                    },
                    'reject': function(_0x23a8bd) {
                        _0x118f17();
                    }
                });
            } else
                _0x118f17();
        }
        var _0x22b0f9 = 'https://tracker-stream.neodatagroup.com/pv?sid=2020&rnd={id_sessione}&uuid={@PPID}&ip={ip}&id={channelTagId}&ac=e&at={eventType}&av=true&de={device_brand}&dm={device_model}&df={device_model_family}&os={operating_system}&cd={cd}&ids={@PPID};ppid;rai&cl=1', _0x39905b = 0x3c, _0x60dd84 = _0x49a5e2(), _0x58b213 = _0x2004d4(), _0x57d524 = 'start', _0x412ea9, _0xe4a31b, _0x501a4c = {
            'rai\x201': 0x2e5a,
            'rai\x202': 0x2e5b,
            'rai\x203': 0x2e5c,
            'rai\x204': 0x2e5d,
            'rai\x205': 0x2e5e,
            'rai\x20movie': 0x2e5f,
            'rai\x20premium': 0x2e60,
            'rai\x20storia': 0x2e61,
            'rai\x20yoyo': 0x2e62,
            'rai\x20news\x2024': 0x2e63,
            'rai\x20sport': 0x2e64,
            'rai\x20gulp': 0x2e65,
            'rai\x20scuola': 0x2e66
        }, _0x1f22fd = function(_0x4c3f71, _0x52e0fd) {
            if (!!_0x52e0fd)
                switch (_0x4c3f71) {
                case '{id_sessione}':
                    return _0x60dd84;
                case '{@PPID}':
                    return _0x58b213;
                case '{ip}':
                    break;
                case '{channelTagId}':
                    var _0x348cf0 = $VideoManager['getInstance']()['_channelName']['noBOM']()['toLowerCase']();
                    if (_0x348cf0['indexOf']('rai\x20sport') === 0x0)
                        _0x348cf0 = 'rai\x20sport';
                    else {
                        if (_0x348cf0['indexOf']('rai\x203') === 0x0)
                            _0x348cf0 = 'rai\x203';
                        else {
                            var _0x1856c6 = _0x348cf0['indexOf']('hd');
                            _0x1856c6 > -0x1 && (_0x348cf0 = _0x348cf0['substring'](0x0, _0x1856c6)['trim']());
                        }
                    }
                    return _0x501a4c[_0x348cf0] || '';
                case '{eventType}':
                    return _0x57d524;
                case '{device_brand}':
                    return $DEVICE['userAgentInfo']['vendorName'] || '';
                case '{device_model}':
                    return $DEVICE['userAgentInfo']['modelName'] || '';
                case '{device_model_family}':
                    return $DEVICE['userAgentInfo']['familyName'] || '';
                case '{operating_system}':
                    break;
                case '{cd}':
                    var _0x2124d8 = [];
                    if (!!_0x52e0fd['n'])
                        _0x2124d8['push']('c|prgid_' + _0x52e0fd['n']);
                    if (!!_0x52e0fd['g'])
                        _0x2124d8['push']('c|prgcat_' + _0x52e0fd['g']);
                    if (!!_0x52e0fd['t'])
                        _0x2124d8['push']('c|prgtype_' + _0x52e0fd['t']);
                    _0x2124d8['push']('c|plat_' + (DELIVERY_FLAG === 0x0 ? 'DTH' : DELIVERY_FLAG === 0x2 ? 'DTT' : 'NET') + '-' + $MISC['getResolution']()),
                    _0x2124d8['push']('c|vers_' + $DEVICE['userAgentInfo']['specVersion'] + '-' + (_0x102a2f['support']['double'] ? 0x2 : _0x102a2f['support']['single'] ? 0x1 : 0x0));
                    return _0x2124d8['join'](',');
                default:
                    println('[EXAUDI]\x20unknown\x20parameter:\x20' + _0x4c3f71, 'wrn');
                }
            return '';
        }, _0x5e6703 = function(_0xd9fe0) {
            var _0x4309c3 = _0x22b0f9
              , _0x4fac73 = _0x22b0f9['match'](/\{(.*?)}/g);
            if (_0x4fac73)
                for (var _0x1cf727 = 0x0; _0x1cf727 < _0x4fac73['length']; _0x1cf727++)
                    _0x4309c3 = _0x4309c3['replace'](_0x4fac73[_0x1cf727], encodeURIComponent(_0x1f22fd(_0x4fac73[_0x1cf727], _0xd9fe0)));
            return _0x4309c3;
        };
        function _0x4ec405() {
            _0x57d524 = 'start',
            _0x3480a1(),
            _0xe4a31b = setInterval(_0x3480a1, _0x39905b * 0x3e8);
        }
        function _0x3480a1() {
            if (!$StreamingService['isChannelLive']() || !!$StreamingService['getPlayer']()) {
                println('[EXAUDI]\x20not\x20a\x20broadcast\x20channel,\x20skip', 'wrn');
                return;
            }
            if (!_0x581a3d || !_0x412ea9) {
                println('[EXAUDI]\x20epg\x20not\x20available,\x20skip', 'wrn');
                return;
            }
            var _0x2d2ea1 = $TimeManager['getInstance']()['_nowMs'];
            while (_0x412ea9['length'] && _0x2d2ea1 > _0x412ea9[0x0]['e']) {
                _0x412ea9['shift']();
            }
            if (_0x412ea9['length'] === 0x0) {
                println('[EXAUDI]\x20no\x20more\x20events', 'wrn'),
                _0x581a3d = null,
                _0x99679a(function(_0x5981e6) {
                    !!_0x5981e6 && _0x3480a1();
                }, !![]);
                return;
            }
            var _0x29eca2 = _0x5e6703(_0x412ea9[0x0]);
            _0x57d524 = 'heartbeat';
            if (HBBTV_EMULATION)
                return;
            $Net['http'](_0x29eca2)['get']({
                'resolve': function(_0x168223) {
                    println('[EXAUDI]\x20' + _0x168223['code'] + '\x20-\x20url:\x20' + _0x29eca2, 'fne');
                },
                'reject': function(_0x5e4df3) {
                    println('[EXAUDI]\x20' + _0x5e4df3['code'] + '\x20-\x20url:\x20' + _0x29eca2, 'wrn');
                }
            });
        }
        function _0x14a730(_0x3eb6d0) {
            var _0x3ae3f5 = !!_0x3eb6d0 && _0x3eb6d0['name'];
            println('[EXAUDI]\x20channel\x20changed:\x20' + _0x3ae3f5);
            if (!_0x3ae3f5)
                return;
            _0x3ae3f5 = _0x3ae3f5['toLowerCase']();
            var _0x392709;
            if (_0x3ae3f5 === 'rai\x20sport\x20+\x20hd' || _0x3ae3f5 === 'rai\x20sport')
                _0x3ae3f5 = 'rai\x20sport\x20piu\x20hd';
            else {
                if (_0x3ae3f5['indexOf']('tgr') > -0x1)
                    _0x3ae3f5 = 'rai\x203';
                else {
                    if (_0x3ae3f5['indexOf']('\x20hd') > -0x1)
                        _0x392709 = _0x3ae3f5['indexOf']('\x20hd'),
                        _0x3ae3f5 = _0x3ae3f5['substring'](0x0, _0x392709);
                    else
                        _0x3ae3f5['indexOf']('\x20sd') > -0x1 && (_0x392709 = _0x3ae3f5['indexOf']('\x20sd'),
                        _0x3ae3f5 = _0x3ae3f5['substring'](0x0, _0x392709));
                }
            }
            for (var _0x43961f = 0x0; !!_0x581a3d && _0x43961f < _0x581a3d['epg']['length']; _0x43961f++) {
                if (_0x581a3d['epg'][_0x43961f]['channel'] === _0x3ae3f5) {
                    _0x412ea9 = _0x581a3d['epg'][_0x43961f]['events'];
                    !!_0xe4a31b && (clearInterval(_0xe4a31b),
                    _0xe4a31b = null);
                    _0x4ec405();
                    return;
                }
            }
            println('[EXAUDI]\x20channel\x20not\x20' + _0x3ae3f5 + '\x20found,\x20abort!', 'err');
        }
        return {
            'init': function() {
                _0x99679a(function() {
                    _0x14a730($VideoManager['getInstance']()['_video']['currentChannel']);
                }
                ['bind'](this));
            },
            'onChannelChanged': _0x14a730
        };
    }
    function _0x10cd3e() {
        if (!_0x3d0fb3)
            _0x3d0fb3 = _0x4164d9();
        return _0x3d0fb3;
    }
    return {
        'version': 0x7,
        'init': _0x266631,
        'start': _0x244b50,
        'stop': _0x372849,
        'on': _0x46bb64,
        'isTASupported': function() {
            return _0x102a2f && _0x102a2f['support']['ok'];
        },
        'isOn': function() {
            return _0x5b3687 && _0x5a0acf;
        },
        'loadCreativity': _0xd0db60,
        'spotReplacement': {
            'replace': _0x382436,
            'abort': _0x21aca6,
            'testWK': function() {
                _0x1fa9f0({
                    'watermarks': [{
                        'type': 'img',
                        'name': 'resources/TA/rai.svg?v=1',
                        'x': 0x41,
                        'y': 0x25,
                        'width': 0x30,
                        'height': 0x30
                    }, {
                        'type': 'label',
                        'text': 'Pubblicità',
                        'x': 0x41,
                        'y': 0x55,
                        'width': 0x30,
                        'height': 0x30
                    }]
                });
            }
        }
    };
}()
  , pending = undefined
  , keyLock = ![];
pendingTask = [];
var $DEVICE = {
    'hbbTv': {
        'appManager': undefined,
        'init': function(_0x5d2646) {
            this['appManager'] = typeof _0x5d2646['getOwnerApplication'] === 'function' && _0x5d2646['getOwnerApplication'](document) || {
                'privateData': {
                    'keyset': {
                        'RED': 0x0,
                        'GREEN': 0x0,
                        'YELLOW': 0x0,
                        'BLUE': 0x0,
                        'NAVIGATION': 0x0,
                        'NUMERIC': 0x0,
                        'PLAY': 0x0,
                        'PAUSE': 0x0,
                        'STOP': 0x0,
                        'value': 0x0,
                        'maximumValue': 0x200,
                        'setValue': function(_0x28489c) {
                            this['value'] = _0x28489c;
                        }
                    }
                },
                'show': function() {
                    println('[Device.hbbTV]\x20app\x20running\x20on\x20a\x20non\x20HbbTV\x20device', 'wrn'),
                    document['getElementById']('appmgr')['style']['display'] = 'none',
                    document['getElementById']('video')['style']['display'] = 'none';
                },
                'destroyApplication': function() {
                    location['reload']();
                }
            };
            !window['KeyEvent'] && (window['KeyEvent'] = {});
            if (!KeyEvent['VK_LEFT'])
                KeyEvent['VK_LEFT'] = 0x25;
            if (!KeyEvent['VK_UP'])
                KeyEvent['VK_UP'] = 0x26;
            if (!KeyEvent['VK_RIGHT'])
                KeyEvent['VK_RIGHT'] = 0x27;
            if (!KeyEvent['VK_DOWN'])
                KeyEvent['VK_DOWN'] = 0x28;
            if (!KeyEvent['VK_ENTER'])
                KeyEvent['VK_ENTER'] = 0xd;
            if (!KeyEvent['VK_RED'])
                KeyEvent['VK_RED'] = 0x193;
            if (!KeyEvent['VK_GREEN'])
                KeyEvent['VK_GREEN'] = 0x194;
            if (!KeyEvent['VK_YELLOW'])
                KeyEvent['VK_YELLOW'] = 0x195;
            if (!KeyEvent['VK_BLUE'])
                KeyEvent['VK_BLUE'] = 0x196;
            if (!KeyEvent['VK_0'])
                KeyEvent['VK_0'] = 0x30;
            if (!KeyEvent['VK_1'])
                KeyEvent['VK_1'] = 0x31;
            if (!KeyEvent['VK_2'])
                KeyEvent['VK_2'] = 0x32;
            if (!KeyEvent['VK_3'])
                KeyEvent['VK_3'] = 0x33;
            if (!KeyEvent['VK_4'])
                KeyEvent['VK_4'] = 0x34;
            if (!KeyEvent['VK_5'])
                KeyEvent['VK_5'] = 0x35;
            if (!KeyEvent['VK_6'])
                KeyEvent['VK_6'] = 0x36;
            if (!KeyEvent['VK_7'])
                KeyEvent['VK_7'] = 0x37;
            if (!KeyEvent['VK_8'])
                KeyEvent['VK_8'] = 0x38;
            if (!KeyEvent['VK_9'])
                KeyEvent['VK_9'] = 0x39;
            if (!KeyEvent['VK_BACK'])
                KeyEvent['VK_BACK'] = 0x8;
            if (!KeyEvent['VK_PLAY'])
                KeyEvent['VK_PLAY'] = 0x51;
            if (!KeyEvent['VK_PAUSE'])
                KeyEvent['VK_PAUSE'] = 0x57;
            if (!KeyEvent['VK_STOP'])
                KeyEvent['VK_STOP'] = 0x41;
            if (!KeyEvent['VK_PLAY_PAUSE'])
                KeyEvent['VK_PLAY_PAUSE'] = 0x45;
            if (!KeyEvent['VK_FAST_FWD'])
                KeyEvent['VK_FAST_FWD'] = 0x53;
            if (!KeyEvent['VK_REWIND'])
                KeyEvent['VK_REWIND'] = 0x44;
        }
    },
    'keyManager': {
        'kset': undefined,
        'listeners': [],
        'setValue': function(_0x54cff8) {
            document['removeEventListener']('keydown', $DEVICE['keyManager']['dispatch'], ![]);
            var _0x27bfad = this['kset'];
            _0x27bfad['setValue'](_0x54cff8),
            _0x54cff8 !== _0x27bfad['value'] ? println('[Device.keyManager]\x20WARNING!\x20Unable\x20to\x20listen\x20to\x20the\x20required\x20key\x20set\x20[' + _0x54cff8 + '].\x0a\x09Actualy\x20keySet\x20has\x20been\x20set\x20to\x20[' + _0x27bfad['value'] + ']\x20/\x20keySet.maximumValue:\x20' + _0x27bfad['maximumValue'], 'WRN') : println('[Device.keyManager]\x20keySet\x20<-\x20[value:\x20' + _0x27bfad['value'] + '\x20/\x20maximumValue:\x20' + _0x27bfad['maximumValue'] + ']', 'fne'),
            document['addEventListener']('keydown', $DEVICE['keyManager']['dispatch'], ![]);
        },
        'setDefaultMask': function() {
            if (($DEVICE['userAgentInfo']['vendorName'] || '')['toLowerCase']() === 'samsung') {
                if (ON_SCREEN_DEBUG)
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN'] | this['kset']['OTHER'] | this['kset']['NAVIGATION'], this['kset']['VK_BACK']);
                else
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN'] | this['kset']['OTHER'], this['kset']['VK_BACK']);
            } else {
                if (ON_SCREEN_DEBUG)
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN'] | this['kset']['NAVIGATION']);
                else
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN']);
            }
        },
        'setListener': function(_0x25bcbe) {
            function _0x2fc7b0(_0x3b9712) {
                this['clearListener'](_0x3b9712['widget']),
                this['listeners']['push'](_0x3b9712);
            }
            keyLock ? pendingTask['push'](function() {
                _0x2fc7b0['bind'](this)(_0x25bcbe);
            }
            ['bind'](this)) : _0x2fc7b0['bind'](this)(_0x25bcbe);
        },
        'clearListener': function(_0x5eb245) {
            for (var _0x384819 = 0x0; _0x384819 < this['listeners']['length']; _0x384819++) {
                if (this['listeners'][_0x384819]['widget'] === _0x5eb245)
                    return this['listeners']['splice'](_0x384819, 0x1),
                    !![];
            }
            return ![];
        },
        'getListener': function(_0x5c9f32) {
            for (var _0x1d2643 = 0x0; _0x1d2643 < this['listeners']['length']; _0x1d2643++) {
                if (this['listeners'][_0x1d2643]['widget'] === _0x5c9f32)
                    return this['listeners'][_0x1d2643]['handler'];
            }
            return undefined;
        },
        'dispatch': function(_0x2bdbb4) {
            keyLock = !![];
            var _0x201e4f = Object['prototype']['toString']['call'](_0x2bdbb4);
            _0x201e4f = _0x201e4f['replace']('[object\x20', ''),
            _0x201e4f = _0x201e4f['replace'](']', '');
            if (_0x201e4f === 'Number') {
                var _0x20cefe = new Event('keypress');
                _0x20cefe['keyCode'] = _0x2bdbb4,
                _0x2bdbb4 = _0x20cefe;
            } else {
                if (HBBTV_EMULATION && _0x201e4f === 'KeyboardEvent')
                    switch (_0x2bdbb4['keyCode']) {
                    case 'R'['charCodeAt'](0x0):
                        _0x20cefe = new Event('keypress'),
                        _0x20cefe['keyCode'] = KeyEvent['VK_RED'],
                        _0x2bdbb4 = _0x20cefe;
                        break;
                    case 'G'['charCodeAt'](0x0):
                        _0x20cefe = new Event('keypress'),
                        _0x20cefe['keyCode'] = KeyEvent['VK_GREEN'],
                        _0x2bdbb4 = _0x20cefe;
                        break;
                    case 'Y'['charCodeAt'](0x0):
                        _0x20cefe = new Event('keypress'),
                        _0x20cefe['keyCode'] = KeyEvent['VK_YELLOW'],
                        _0x2bdbb4 = _0x20cefe;
                        break;
                    case 'B'['charCodeAt'](0x0):
                        _0x20cefe = new Event('keypress'),
                        _0x20cefe['keyCode'] = KeyEvent['VK_BLUE'],
                        _0x2bdbb4 = _0x20cefe;
                        break;
                    case 0x8:
                        _0x20cefe = new Event('keypress'),
                        _0x20cefe['keyCode'] = KeyEvent['VK_BACK'],
                        _0x2bdbb4 = _0x20cefe;
                        break;
                    }
            }
            var _0x4dedf3 = !HBBTV_EMULATION;
            if (_0x4dedf3) {
                if (pending) {
                    if (pending['evnt']['keyCode'] !== _0x2bdbb4['keyCode']) {
                        clearTimeout(pending['id']),
                        println('🔹\x20notifying\x20(while\x20pending)\x20key\x20' + pending['evnt']['keyCode'] + '\x20/\x20time:\x20' + pending['evnt']['timeStamp'], 'inf');
                        for (var _0x3e5f3a = 0x0, _0x3eb059 = $DEVICE['keyManager']['listeners']; _0x3e5f3a < _0x3eb059['length']; _0x3e5f3a++) {
                            _0x3eb059[_0x3e5f3a]['handler']['call'](_0x3eb059[_0x3e5f3a]['handler'], pending['evnt']);
                        }
                        while (pendingTask['length'] > 0x0) {
                            pendingTask['pop']()();
                        }
                    } else {
                        println('DUMMY\x20KeyEvent\x20CLONE\x20=>\x20DISCARD\x20the\x20received\x20event', 'err');
                        return;
                    }
                }
                pending = {
                    'evnt': _0x2bdbb4
                },
                pending['id'] = setTimeout(function(_0x1fd35a) {
                    for (var _0x2035a6 = 0x0, _0x421a8e = $DEVICE['keyManager']['listeners']; _0x2035a6 < _0x421a8e['length']; _0x2035a6++) {
                        _0x421a8e[_0x2035a6]['handler']['call'](_0x421a8e[_0x2035a6]['handler'], _0x1fd35a);
                    }
                    pending = undefined,
                    keyLock = ![];
                    while (pendingTask['length'] > 0x0) {
                        pendingTask['pop']()();
                    }
                }, 0x32, _0x2bdbb4);
            } else {
                for (_0x3e5f3a = 0x0,
                _0x3eb059 = $DEVICE['keyManager']['listeners']; _0x3e5f3a < _0x3eb059['length']; _0x3e5f3a++) {
                    _0x3eb059[_0x3e5f3a]['handler']['call'](_0x3eb059[_0x3e5f3a]['handler'], _0x2bdbb4);
                }
                keyLock = ![];
                while (pendingTask['length'] > 0x0) {
                    pendingTask['pop']()();
                }
            }
        }
    },
    'userAgentInfo': undefined,
    'preferredDRM': 'PLAYREADY',
    'init': function() {
        this['hbbTv']['init'](document['querySelector']('#appmgr')),
        this['keyManager']['kset'] = this['hbbTv']['appManager']['privateData']['keyset'],
        this['userAgentInfo'] = function() {
            var _0x554e23 = /HbbTV\/(\d.\d.\d)\s\((.*?)\)/gm, _0x4cf083 = _0x554e23['exec'](navigator['userAgent']), _0x5dd637 = ['capabilities', 'vendorName', 'modelName', 'softwareVersion', 'hardwareVersion', 'familyName', 'reserved'], _0x40f116 = {}, _0x259825, _0x23fade;
            if (_0x4cf083 && _0x4cf083['length'] > 0x1) {
                _0x40f116['version'] = _0x4cf083[0x1],
                _0x4cf083 = _0x4cf083[0x2]['split'](';');
                for (_0x259825 = 0x0,
                _0x23fade = _0x4cf083['length']; _0x259825 < _0x23fade; _0x259825++) {
                    _0x40f116[_0x5dd637[_0x259825]] = _0x4cf083[_0x259825] && _0x4cf083[_0x259825]['trim']();
                }
            }
            var _0x1005f8 = {
                '1.2.1': '1.5',
                '1.3.1': '2.0',
                '1.4.1': '2.0.1',
                '1.5.1': '2.0.2',
                '1.6.1': '2.0.3'
            };
            return _0x40f116['specVersion'] = _0x1005f8[_0x40f116['version']] || '',
            _0x40f116['isOneDotFiveHbbTv'] = function() {
                return _0x40f116['version'] < '1.4.1';
            }
            ,
            _0x40f116['toString'] = function() {
                return this['vendorName'] + '\x20' + this['modelName'] + '\x20(HbbTV\x20' + this['specVersion'] + ')';
            }
            ,
            _0x40f116;
        }();
    }
};
String['prototype']['width'] = function(_0x160593, _0x54154e) {
    return this['bounds'](_0x160593, _0x54154e)['width'];
}
,
String['prototype']['bounds'] = function(_0x232b63, _0x1e21e3) {
    var _0x2e2658 = String['prototype']['bounds']['el']
      , _0x2f56d6 = String['prototype']['bounds']['canvas'];
    _0x2e2658 === undefined && (String['prototype']['bounds']['el'] = document['createElement']('div'),
    String['prototype']['bounds']['el']['id'] = 'TEXT\x20METRICS\x20DUMMY\x20DIV',
    _0x2e2658 = document['body']['appendChild'](String['prototype']['bounds']['el']),
    String['prototype']['bounds']['canvas'] = document['createElement']('canvas'),
    _0x2f56d6 = String['prototype']['bounds']['canvas']);
    var _0xb896f6 = _0x2f56d6['getContext']('2d');
    if (typeof _0x232b63 === 'number') {
        var _0x333a2b = _0xb896f6['font'];
        _0x333a2b = _0x333a2b['substring'](_0x333a2b['indexOf']('px')),
        _0x232b63 = _0x232b63 + _0x333a2b;
    }
    if (_0x232b63)
        _0xb896f6['font'] = _0x232b63;
    _0x2e2658['style']['position'] = 'absolute',
    _0x2e2658['style']['whiteSpace'] = 'nowrap',
    _0x2e2658['style']['visibility'] = 'hidden';
    if (_0x232b63)
        _0x2e2658['style']['font'] = _0x232b63;
    _0x1e21e3 && (_0x2e2658['style']['letterSpacing'] = _0x1e21e3 + 'px');
    _0x2e2658['innerHTML'] = this['replace'](new RegExp('\x20','g'), '&nbsp;');
    var _0x5b91db = {
        'width': _0x2e2658['getBoundingClientRect']()['width'],
        'height': _0x2e2658['getBoundingClientRect']()['height']
    };
    return _0x2e2658['style']['letterSpacing'] = '',
    _0x5b91db;
}
,
String['prototype']['startsWith'] = function(_0x2a6a12) {
    return this['indexOf'](_0x2a6a12) === 0x0;
}
,
String['prototype']['noBOM'] = function() {
    return this && this['length'] > 0x0 && this[0x0] === '' ? this['substr'](0x1) : this['valueOf']();
}
,
Date['prototype']['toITA'] = function() {
    return new Date(this['toLocaleString']('en-US', {
        'timeZone': 'Europe/Rome'
    }));
}
,
Str = {
    'spaces': 0x2,
    'empty': function(_0x370c84, _0x170f07) {
        var _0xe999af, _0x492666 = '';
        _0x370c84 = _0x370c84 || 0x0,
        _0x170f07 = _0x170f07 || '\x20';
        for (_0xe999af = 0x0; _0xe999af < _0x370c84; _0xe999af++)
            _0x492666 += _0x170f07;
        return _0x492666;
    },
    'str': function(_0x3affde, _0xc48299) {
        var _0xaf047d = typeof _0x3affde, _0x24f61d = '', _0x1d260a, _0x1bb4c1, _0x3de2f6 = 0x0;
        _0xc48299 = _0xc48299 || 0x0,
        _0x1d260a = this['empty'](_0xc48299);
        if (_0x3affde === null)
            _0x24f61d += 'null';
        else {
            if (_0xaf047d === 'object') {
                if (this['isNode'](_0x3affde) || this['isElement'](_0x3affde))
                    return _0x24f61d += _0x3affde['toString'](),
                    _0x24f61d;
                if (Array['isArray'](_0x3affde))
                    _0x1bb4c1 = '[]';
                else
                    _0x1bb4c1 = '{}';
                _0x24f61d += _0x1d260a + _0x1bb4c1[0x0] + '\x0a';
                for (var _0x3d34bf in _0x3affde) {
                    _0x3affde['hasOwnProperty'](_0x3d34bf) && (_0x3de2f6++,
                    _0x24f61d += this['empty'](_0xc48299 + this['spaces']) + '-\x20' + _0x3d34bf + ':\x20' + this['str'](_0x3affde[_0x3d34bf], _0xc48299 + this['spaces']) + '\x0a');
                }
                _0x3de2f6 === 0x0 && (_0x24f61d += this['empty'](_0xc48299 + this['spaces']) + '\x20' + _0x3affde['toString']() + '\x0a'),
                _0x24f61d += _0x1d260a + _0x1bb4c1[0x1];
            } else {
                if (_0xaf047d === 'function')
                    _0x24f61d += 'function\x20[code\x20omitted]';
                else
                    _0xaf047d === 'string' ? _0x24f61d += _0x3affde : _0x24f61d += _0x3affde;
            }
        }
        return _0x24f61d;
    },
    'isNode': function(_0x39a1b4) {
        return typeof Node === 'object' ? _0x39a1b4 instanceof Node : _0x39a1b4 && typeof _0x39a1b4 === 'object' && typeof _0x39a1b4['nodeType'] === 'number' && typeof _0x39a1b4['nodeName'] === 'string';
    },
    'isElement': function(_0x1d6af8) {
        return typeof HTMLElement === 'object' ? _0x1d6af8 instanceof HTMLElement : _0x1d6af8 && typeof _0x1d6af8 === 'object' && _0x1d6af8 !== null && _0x1d6af8['nodeType'] === 0x1 && typeof _0x1d6af8['nodeName'] === 'string';
    },
    'xmlToJson': function(_0x283daf) {
        var _0x2a5b44 = {};
        if (_0x283daf['nodeType'] === 0x1) {
            if (_0x283daf['attributes']['length'] > 0x0) {
                _0x2a5b44['@attributes'] = {};
                for (var _0x65958a = 0x0; _0x65958a < _0x283daf['attributes']['length']; _0x65958a++) {
                    var _0x36e551 = _0x283daf['attributes']['item'](_0x65958a);
                    _0x2a5b44['@attributes'][_0x36e551['nodeName']] = _0x36e551['nodeValue'];
                }
            }
        } else
            _0x283daf['nodeType'] === 0x3 && (_0x2a5b44 = _0x283daf['nodeValue']);
        if (_0x283daf['hasChildNodes']() && _0x283daf['childNodes']['length'] === 0x1 && _0x283daf['childNodes'][0x0]['nodeType'] === 0x3 && !_0x2a5b44['@attributes'])
            _0x2a5b44 = _0x283daf['childNodes'][0x0]['nodeValue'];
        else {
            if (_0x283daf['hasChildNodes']())
                for (var _0x3fece7 = 0x0; _0x3fece7 < _0x283daf['childNodes']['length']; _0x3fece7++) {
                    var _0xa5c388 = _0x283daf['childNodes']['item'](_0x3fece7)
                      , _0xa0b45c = _0xa5c388['nodeName'];
                    if (typeof _0x2a5b44[_0xa0b45c] === 'undefined')
                        _0x2a5b44[_0xa0b45c] = this['xmlToJson'](_0xa5c388);
                    else {
                        if (typeof _0x2a5b44[_0xa0b45c]['push'] === 'undefined') {
                            var _0x196355 = _0x2a5b44[_0xa0b45c];
                            _0x2a5b44[_0xa0b45c] = [],
                            _0x2a5b44[_0xa0b45c]['push'](_0x196355);
                        }
                        _0x2a5b44[_0xa0b45c]['push'](this['xmlToJson'](_0xa5c388));
                    }
                }
        }
        return _0x2a5b44;
    },
    'xmlToString': function(_0x25ec9d) {
        function _0x1011fb(_0x58c558) {
            xmlString = _0x58c558['trim']()['replace'](/>\s*</g, '>\x0a<')['replace'](/(<[^\/>].*>)\n(<[\/])/g, '$1$2')['replace'](/(<\/[^>]+>|<[^>]+\/>)(<[^>]+>)/g, '$1\x0a$2'),
            xmlArr = xmlString['split']('\x0a');
            var _0x51f2ec = ''
              , _0x13e861 = 0x0;
            if (/^<[?]xml/['test'](xmlArr[0x0]))
                _0x13e861++;
            for (var _0x2118fd = _0x13e861; _0x2118fd < xmlArr['length']; _0x2118fd++) {
                var _0x5aaf5e = xmlArr[_0x2118fd]['trim']();
                if (/^<[/]/['test'](_0x5aaf5e))
                    _0x51f2ec = _0x51f2ec['replace'](/.$/, ''),
                    xmlArr[_0x2118fd] = _0x51f2ec + _0x5aaf5e;
                else
                    /<.*>.*<\/.*>|<.*[^>]\/>/['test'](_0x5aaf5e) ? xmlArr[_0x2118fd] = _0x51f2ec + _0x5aaf5e : (xmlArr[_0x2118fd] = _0x51f2ec + _0x5aaf5e,
                    _0x51f2ec += '\x09');
            }
            return xmlArr['join']('\x0a');
        }
        if (_0x25ec9d['xml'])
            return _0x1011fb(_0x25ec9d['xml']);
        else {
            if (XMLSerializer)
                return _0x1011fb(new XMLSerializer()['serializeToString'](_0x25ec9d));
            else
                return '';
        }
    }
};
!Array['from'] && (Array['from'] = function() {
    var _0x5d0ee6 = Object['prototype']['toString']
      , _0x51d18b = function(_0x36f2d7) {
        return typeof _0x36f2d7 === 'function' || _0x5d0ee6['call'](_0x36f2d7) === '[object\x20Function]';
    }
      , _0x1f98f3 = function(_0x2c18a2) {
        var _0x27388d = Number(_0x2c18a2);
        if (isNaN(_0x27388d))
            return 0x0;
        if (_0x27388d === 0x0 || !isFinite(_0x27388d))
            return _0x27388d;
        return (_0x27388d > 0x0 ? 0x1 : -0x1) * Math['floor'](Math['abs'](_0x27388d));
    }
      , _0x5e9fb2 = Math['pow'](0x2, 0x35) - 0x1
      , _0x8ba082 = function(_0x42f5ec) {
        var _0x2e15a8 = _0x1f98f3(_0x42f5ec);
        return Math['min'](Math['max'](_0x2e15a8, 0x0), _0x5e9fb2);
    };
    return function _0x5113ed(_0x5c3d53) {
        var _0x1208d1 = this
          , _0x17e056 = Object(_0x5c3d53);
        if (_0x5c3d53 == null)
            throw new TypeError('Array.from\x20requires\x20an\x20array-like\x20object\x20-\x20not\x20null\x20or\x20undefined');
        var _0x30a496 = arguments['length'] > 0x1 ? arguments[0x1] : void undefined, _0x3463da;
        if (typeof _0x30a496 !== 'undefined') {
            if (!_0x51d18b(_0x30a496))
                throw new TypeError('Array.from:\x20when\x20provided,\x20the\x20second\x20argument\x20must\x20be\x20a\x20function');
            arguments['length'] > 0x2 && (_0x3463da = arguments[0x2]);
        }
        var _0x4338aa = _0x8ba082(_0x17e056['length']), _0x13adb9 = _0x51d18b(_0x1208d1) ? Object(new _0x1208d1(_0x4338aa)) : new Array(_0x4338aa), _0x1a56f9 = 0x0, _0x576241;
        while (_0x1a56f9 < _0x4338aa) {
            _0x576241 = _0x17e056[_0x1a56f9],
            _0x30a496 ? _0x13adb9[_0x1a56f9] = typeof _0x3463da === 'undefined' ? _0x30a496(_0x576241, _0x1a56f9) : _0x30a496['call'](_0x3463da, _0x576241, _0x1a56f9) : _0x13adb9[_0x1a56f9] = _0x576241,
            _0x1a56f9 += 0x1;
        }
        return _0x13adb9['length'] = _0x4338aa,
        _0x13adb9;
    }
    ;
}());
!Array['prototype']['find'] && Object['defineProperty'](Array['prototype'], 'find', {
    'value': function(_0x119c44) {
        'use strict';
        if (this == null)
            throw new TypeError('Array.prototype.find\x20called\x20on\x20null\x20or\x20undefined');
        if (typeof _0x119c44 !== 'function')
            throw new TypeError('predicate\x20must\x20be\x20a\x20function');
        var _0x7b0291 = Object(this)
          , _0x4a8f2e = _0x7b0291['length'] >>> 0x0
          , _0xd98756 = arguments[0x1];
        for (var _0x3ec803 = 0x0; _0x3ec803 !== _0x4a8f2e; _0x3ec803++) {
            if (_0x119c44['call'](_0xd98756, this[_0x3ec803], _0x3ec803, _0x7b0291))
                return this[_0x3ec803];
        }
        return undefined;
    }
});
var screenBlackBoard = undefined;
function getObjectType(_0x571f75) {
    var _0x337cb6 = Object['prototype']['toString']['call'](_0x571f75);
    return _0x337cb6 = _0x337cb6['replace']('[object\x20', ''),
    _0x337cb6 = _0x337cb6['replace'](']', ''),
    _0x337cb6;
}
function println(_0x432b3a, _0x1f47d9) {
    if (DEBUG || CONSOLE_DEBUG || ON_SCREEN_DEBUG) {
        if (arguments['length'] === 0x0)
            _0x432b3a = '';
        _0x1f47d9 = (_0x1f47d9 || 'OUT')['toUpperCase']();
        if (CONSOLE_DEBUG)
            switch (_0x1f47d9) {
            case 'ERR':
                console['log']('%c' + _0x432b3a, 'color:' + '#ff0000');
                break;
            case 'OUT':
                console['log'](_0x432b3a);
                break;
            case 'WRN':
                console['log']('%c' + _0x432b3a, 'color:' + '#ffb400');
                break;
            case 'INF':
                console['log']('%c' + _0x432b3a, 'color:' + '#0f910f');
                break;
            case 'FNE':
                console['log']('%c' + _0x432b3a, 'color:' + '#2c50a6');
                break;
            default:
                console['log']('[' + _0x1f47d9 + ']' + _0x432b3a);
                break;
            }
        if (ON_SCREEN_DEBUG)
            try {
                if (!screenBlackBoard)
                    screenBlackBoard = $ScreenBlackBoard['getInstance']();
                var _0x28f001 = typeof _0x432b3a;
                if (_0x28f001 === 'undefined')
                    _0x432b3a = 'undefined';
                else {
                    if (_0x28f001 === 'object') {
                        if (_0x432b3a)
                            _0x432b3a = Str['str'](_0x432b3a),
                            _0x432b3a['length'] > 0xbb8 && (_0x432b3a = 'very\x20long\x20Object\x20[' + _0x432b3a['length'] + '\x20chars]\x20-\x20println\x20SKIP',
                            _0x1f47d9 = '⚠');
                        else
                            _0x432b3a = 'null';
                    } else
                        _0x28f001 === 'function' ? _0x432b3a = 'function\x20[' + _0x432b3a['name'] + ']' : _0x432b3a = _0x432b3a['toString']();
                }
                switch (_0x1f47d9) {
                case 'ERR':
                    screenBlackBoard['println'](_0x432b3a, '#d70f1d');
                    break;
                case 'OUT':
                    screenBlackBoard['println'](_0x432b3a);
                    break;
                case 'WRN':
                    screenBlackBoard['println'](_0x432b3a, '#d7721c');
                    break;
                case 'INF':
                    screenBlackBoard['println'](_0x432b3a, '#0f910f');
                    break;
                case 'FNE':
                    screenBlackBoard['println'](_0x432b3a, '#3c67d7');
                    break;
                default:
                    screenBlackBoard['println']('[' + _0x1f47d9 + ']\x20' + _0x432b3a);
                    break;
                }
            } catch (_0x1d8f91) {}
        if (window['$l']) {
            var _0x58eebb = getObjectType(_0x432b3a);
            if (_0x58eebb === 'Object' || _0x58eebb === 'XMLDocument')
                console['log'](_0x432b3a);
            else
                switch (_0x1f47d9) {
                case 'ERR':
                    $l['log'](_0x432b3a + '\x0a', '#d70f1d');
                    break;
                case 'OUT':
                    $l['log'](_0x432b3a + '\x0a', '#c1c1e2');
                    break;
                case 'WRN':
                    $l['log'](_0x432b3a + '\x0a', '#fdbe1c');
                    break;
                case 'INF':
                    $l['log'](_0x432b3a + '\x0a', '#0f910f');
                    break;
                case 'FNE':
                    $l['log'](_0x432b3a + '\x0a', '#3c67d7');
                    break;
                default:
                    $l['log']('[' + _0x1f47d9 + ']' + _0x432b3a + '\x0a', '#c1c1e2');
                    break;
                }
        }
    }
}
var $MISC = {
    'objScanner': function(_0x2df80a, _0x33077a, _0x15269f, _0x37d1eb, _0x249d83, _0x3620a7) {
        var _0x39db9e = undefined;
        _0x15269f && (_0x39db9e = _0x15269f(_0x2df80a, _0x33077a, _0x37d1eb, _0x249d83, _0x3620a7),
        _0x39db9e = _0x39db9e === undefined ? !![] : _0x39db9e);
        if (_0x39db9e) {
            if (Array['isArray'](_0x2df80a))
                for (var _0xbe07f2 = 0x0; _0xbe07f2 < _0x2df80a['length']; _0xbe07f2++)
                    $MISC['objScanner'](_0x2df80a[_0xbe07f2], _0x33077a + '[' + _0xbe07f2 + ']', _0x15269f, _0x37d1eb, _0x2df80a, _0xbe07f2);
            else {
                if (typeof _0x2df80a === 'object')
                    for (var _0xbe07f2 = 0x0, _0x499484 = Object['keys'](_0x2df80a); _0xbe07f2 < _0x499484['length']; _0xbe07f2++)
                        $MISC['objScanner'](_0x2df80a[_0x499484[_0xbe07f2]], _0x499484[_0xbe07f2], _0x15269f, _0x2df80a, _0x249d83, _0x3620a7);
            }
        }
    },
    'html2Element': function(_0x3ca962) {
        var _0x1c53c1 = document['createElement']('div');
        return _0x1c53c1['innerHTML'] = _0x3ca962,
        _0x1c53c1['firstChild'];
    },
    'fontLoad': function(_0x5e1d3d, _0x2e8c30) {
        var _0x1986a7 = document['querySelector']('#appmgr')
          , _0xf8fe28 = !!(typeof _0x1986a7['getOwnerApplication'] === 'function' && _0x1986a7['getOwnerApplication'](document));
        if (_0xf8fe28) {
            var _0x197b3e = [];
            _0x5e1d3d['forEach'](function(_0x21f370, _0x1373dc, _0xb62f4f) {
                if (_0x21f370['family']['toLowerCase']()['indexOf']('tiresias') === -0x1)
                    _0x197b3e['push'](_0x21f370);
            }),
            _0x5e1d3d = _0x197b3e;
        }
        if (_0x5e1d3d['length'] > 0x0 && document['fonts']['ready']['then']) {
            _0x5e1d3d['forEach'](function(_0x416e47, _0x39cd95, _0x389577) {
                document['fonts']['add'](_0x416e47);
            });
            var _0x2d672e = !![];
            _0x5e1d3d['forEach'](function(_0x4f0abf, _0x3a874e, _0x5ddc78) {
                _0x4f0abf['loaded']['then'](function(_0x59bea8) {
                    if (_0x2d672e)
                        println('Loaded\x20' + _0x59bea8['family'] + '\x20[status:\x20' + _0x59bea8['status'] + ']', 'inf');
                }, function(_0x2ffbaa) {
                    if (_0x2d672e)
                        println('Unable\x20to\x20load\x20' + _0x5ddc78[_0x3a874e]['family'] + '\x0a\x09' + _0x2ffbaa['name'] + '\x0a\x09Current\x20status:\x20' + _0x4f0abf['status'] + '\x0a' + '\x09***\x20FONT_LOADING\x20RESET\x20TO\x20FALSE\x20***\x0a\x09Tiresias\x20font\x20will\x20be\x20used\x20everywhere', 'err');
                    FONT_LOADING = ![],
                    _0x2d672e = ![];
                }),
                _0x4f0abf['load']();
            }),
            document['fonts']['ready']['then'](function(_0x5495b3) {
                println('Font\x20loading\x20stop', 'fne'),
                _0x2e8c30 && _0x2e8c30();
            });
        } else {
            if (_0x2e8c30)
                _0x2e8c30();
        }
    },
    'wait4fonts': function(_0x511aa9, _0x3447fc) {
        var _0x4c9551 = Date['now']();
        function _0x573b09(_0x21f762) {
            if (Date['now']() - _0x4c9551 > 0x5dc)
                return console['error']('[FONT]\x20timeout\x20-----------'),
                !![];
            else {
                var _0x2abdb2 = [];
                for (var _0x4ab3ee = 0x0; _0x4ab3ee < _0x21f762['length']; _0x4ab3ee++)
                    _0x2abdb2['push']('ABCDEFGHIJKLMNO\x20abcdefghijklmno\x20@#çòà§€'['width']('52px/64px\x20' + _0x21f762[_0x4ab3ee], -0.2));
                var _0x448649 = ![];
                for (_0x4ab3ee = 0x0; !_0x448649 && _0x4ab3ee < _0x2abdb2['length']; _0x4ab3ee++)
                    for (var _0x303090 = _0x4ab3ee + 0x1; !_0x448649 && _0x303090 < _0x2abdb2['length']; _0x303090++) {
                        _0x448649 = _0x2abdb2[_0x4ab3ee] === _0x2abdb2[_0x303090];
                    }
                return !_0x448649;
            }
        }
        (function _0x16ab6d() {
            if (_0x573b09(_0x511aa9)) {
                for (var _0x29170d = 0x0; _0x29170d < _0x511aa9['length']; _0x29170d++)
                    println('🟢\x20' + _0x511aa9[_0x29170d]);
                if (_0x3447fc)
                    setTimeout(_0x3447fc, 0x64);
            } else
                setTimeout(_0x16ab6d, 0xa);
        }());
    },
    'fontCheck': function(_0x32978e) {
        return FONT_LOADING ? _0x32978e : _0x32978e['replace'](/ +.*/gm, '\x20Tiresias');
    },
    'jsLoadedMap': {},
    'loadJS': function(_0x2b4d76, _0x28cf19, _0x16e2ae) {
        if ($MISC['jsLoadedMap'][_0x2b4d76]) {
            if ($MISC['jsLoadedMap'][_0x2b4d76]['status'] === 'ok')
                return _0x28cf19(_0x2b4d76);
            else {
                ($MISC['jsLoadedMap'][_0x2b4d76]['callbacks'] = $MISC['jsLoadedMap'][_0x2b4d76]['callbacks'] || [])['push'](_0x28cf19);
                return;
            }
        }
        $MISC['jsLoadedMap'][_0x2b4d76] = {
            'status': 'load'
        };
        var _0x674213 = document['createElement']('script');
        _0x674213['src'] = _0x2b4d76,
        _0x674213['onload'] = function(_0x24d170) {
            $MISC['jsLoadedMap'][_0x2b4d76]['status'] = 'ok',
            _0x28cf19(_0x2b4d76);
            var _0x47dd2c = $MISC['jsLoadedMap'][_0x2b4d76]['callbacks'];
            if (_0x47dd2c) {
                for (var _0x33fc7d = 0x0; _0x33fc7d < _0x47dd2c['length']; _0x33fc7d++)
                    _0x47dd2c[_0x33fc7d](_0x2b4d76);
                _0x47dd2c['length'] = 0x0,
                $MISC['jsLoadedMap'][_0x2b4d76]['callbacks'] = null;
            }
        }
        ,
        _0x674213['onerror'] = function(_0x49094f) {
            $MISC['jsLoadedMap'][_0x2b4d76]['status'] = 'fail',
            println('Error\x20on\x20' + _0x2b4d76 + '\x20loading', 'err'),
            _0x28cf19(_0x2b4d76, {
                'error': this['src']
            });
        }
        ,
        _0x16e2ae['appendChild'](_0x674213);
    },
    'loadMainJS': function(_0x2eff02, _0x3cd831) {
        $MISC['loadJS']('javascript/JS1_20221130_164452.js', function(_0x2fecbe, _0x277d30) {
            if (!_0x277d30 || _0x3cd831)
                _0x2eff02(_0x2fecbe, _0x277d30);
            else
                $Gui['getInstance']()['_loadingFlag'] = ![],
                $SimpleBanner['getInstance']()['show'](!![], 'aggiornamento\x20in\x20corso', 0x5, function() {
                    $DEVICE['hbbTv']['appManager']['destroyApplication']();
                });
        }, document['head']);
    },
    'getChName': function(_0x243419) {
        switch (_0x243419['name']['noBOM']()) {
        case 'Rai\x204K':
            return 'Rai\x204K';
        case 'Rai\x201':
            return 'Rai\x201';
        case 'Rai\x201\x20HD':
            return 'Rai\x201\x20HD';
        case 'Rai\x202':
            return 'Rai\x202';
        case 'Rai\x20Radio\x202\x20Visual':
            return 'Rai\x20Radio\x202\x20Visual';
        case 'Rai\x202\x20HD':
            return 'Rai\x202\x20HD';
        case 'Rai\x203':
        case 'Rai\x203\x20TGR\x20Piemonte':
            return 'Rai\x203';
        case 'Rai\x203\x20HD':
            return 'Rai\x203\x20HD';
        case 'Rai\x204':
            return 'Rai\x204';
        case 'Rai\x204\x20HD':
            return 'Rai\x204\x20HD';
        case 'Rai\x205':
            return 'Rai\x205';
        case 'Rai\x205\x20HD':
            return 'Rai\x205\x20HD';
        case 'Rai\x20Movie':
            return 'Rai\x20Movie';
        case 'Rai\x20Movie\x20HD':
            return 'Rai\x20Movie\x20HD';
        case 'Rai\x20Premium':
            return 'Rai\x20Premium';
        case 'Rai\x20Premium\x20HD':
            return 'Rai\x20Premium\x20HD';
        case 'Rai\x20Gulp':
            return 'Rai\x20Gulp';
        case 'Rai\x20Gulp\x20HD':
            return 'Rai\x20Gulp\x20HD';
        case 'Rai\x20YoYo':
            return 'Rai\x20Yoyo';
        case 'Rai\x20YoYo\x20HD':
            return 'Rai\x20Yoyo\x20HD';
        case 'Rai\x20Storia':
            return 'Rai\x20Storia';
        case 'Rai\x20Storia\x20HD':
            return 'Rai\x20Storia\x20HD';
        case 'Rai\x20Scuola':
            return 'Rai\x20Scuola';
        case 'Rai\x20Scuola\x20HD':
            return 'Rai\x20Scuola\x20HD';
        case 'Rai\x20News24':
        case 'Rai\x20News\x2024':
            return 'Rai\x20News\x2024';
        case 'Rai\x20Sport\x20+\x20HD':
            return 'Rai\x20Sport\x20piu\x20HD';
        case 'Rai\x20Sport':
            return 'Rai\x20Sport';
        case 'Rai\x20Radio\x20Kids':
            return 'Rai\x20Radio\x20Kids';
        case 'Rai\x20Radio\x20Tutta\x20Italiana':
            return 'Rai\x20Radio\x20Tutta\x20Italiana';
        case 'Rai\x20Radio2':
        case 'Rai\x20Radio\x202':
            return 'Rai\x20Radio\x202';
        case 'Rai\x20Radio3\x20Classica':
        case 'Rai\x20Radio\x203\x20Classica':
        case 'Rai\x20Radio\x20Classica':
            return 'Rai\x20Radio3\x20Classica';
        case 'Rai\x20Radio1':
        case 'Rai\x20Radio\x201':
            return 'Rai\x20Radio\x201';
        case 'Rai\x20Radio1\x20Sport':
        case 'Rai\x20Radio\x201\x20Sport':
            return 'Rai\x20Radio1\x20Sport';
        case 'Rai\x20Radio\x20Live':
            return 'Rai\x20Radio\x20Live';
        case 'Rai\x20Radio\x20Techete\x27':
        case 'Rai\x20Radio\x20Techetè':
            return 'Rai\x20Radio\x20Techete';
        case 'Rai\x20Gr\x20Parlamento':
        case 'Rai\x20GrParlamento':
        case 'Rai\x20GR\x20Parlamento':
            return 'Rai\x20Radio\x20GR\x20Parlamento';
        case 'Rai\x20Isoradio':
            return 'Rai\x20Isoradio';
        case 'Rai\x20Radio2\x20Indie':
        case 'Rai\x20Radio\x202\x20Indie':
            return 'Rai\x20Radio2\x20Indie';
        case 'Rai\x20Radio3':
        case 'Rai\x20Radio\x203':
            return 'Rai\x20Radio\x203';
        default:
            var _0x134fd2 = _0x243419['name']['noBOM']()
              , _0x556ec3 = _0x134fd2['indexOf']('TGR');
            if (_0x556ec3 > -0x1)
                return _0x134fd2['substring'](0x0, _0x556ec3)['trim']();
            println('Unable\x20to\x20get\x20chName\x20for\x20\x22' + _0x243419['name'] + '\x22', 'err');
            return _0x243419['name']['toLowerCase']()['replace'](/ /gm, '');
        }
    },
    'getChColor': function(_0x344394) {
        var _0x5d9eac = $COL[$MISC['getChName'](_0x344394)];
        return _0x5d9eac || $COL['Rai'];
    },
    'getChSvg': function(_0x3d5a9e) {
        println($MISC['getChName'](_0x3d5a9e));
        var _0x30af04 = $DataLoader['getInstance']()['getSvgCode']('RaiSquareLogo');
        _0x30af04 = _0x30af04['replace'](/.*d\s*=\s*"/mig, ''),
        _0x30af04 = _0x30af04['replace'](/".*/mi, '');
        var _0x4a0814 = $DataLoader['getInstance']()['getSvgCode']($MISC['getChName'](_0x3d5a9e));
        return _0x4a0814 = _0x4a0814['replace'](/\sd\s*=\s*"/gmi, '\x20d=\x22' + _0x30af04),
        _0x4a0814;
    },
    'getChSvgLogoUrl': function(_0x4f0fdc) {
        switch (_0x4f0fdc['name']) {
        default:
            $DataLoader['getInstance']()['getSvgImageUrl']($MISC['getChName'](_0x4f0fdc));
        }
    },
    'colorNormalize': function(_0x619f48) {
        var _0x339913 = /("|')#.{3,6}("|')/gm, _0x3f2b10, _0x3bd9d4 = _0x619f48['slice'](), _0x2765c8 = 0x0, _0x5616b5, _0x244746 = [];
        while ((_0x3f2b10 = _0x339913['exec'](_0x619f48)) !== null) {
            _0x3f2b10['index'] === _0x339913['lastIndex'] && _0x339913['lastIndex']++;
            var _0x333edf;
            if (_0x3f2b10[0x0]['length'] === 0x6) {
                _0x5616b5 = [parseInt(_0x3f2b10[0x0]['charAt'](0x2) + _0x3f2b10[0x0]['charAt'](0x2), 0x10), parseInt(_0x3f2b10[0x0]['charAt'](0x3) + _0x3f2b10[0x0]['charAt'](0x3), 0x10), parseInt(_0x3f2b10[0x0]['charAt'](0x4) + _0x3f2b10[0x0]['charAt'](0x4), 0x10)],
                _0x333edf = '##@' + _0x2765c8++;
                while (_0x333edf['length'] < _0x3f2b10[0x0]['length'])
                    _0x333edf += '#';
                _0x244746['push']({
                    'bookmark': _0x333edf,
                    'replace': '\x22rgb(' + _0x5616b5[0x0] + ',' + _0x5616b5[0x1] + ',' + _0x5616b5[0x2] + ')\x22'
                });
            } else {
                _0x5616b5 = [parseInt(_0x3f2b10[0x0]['charAt'](0x2) + _0x3f2b10[0x0]['charAt'](0x3), 0x10), parseInt(_0x3f2b10[0x0]['charAt'](0x4) + _0x3f2b10[0x0]['charAt'](0x5), 0x10), parseInt(_0x3f2b10[0x0]['charAt'](0x6) + _0x3f2b10[0x0]['charAt'](0x7), 0x10)],
                _0x333edf = '##@' + _0x2765c8++;
                while (_0x333edf['length'] < _0x3f2b10[0x0]['length'])
                    _0x333edf += '#';
                _0x244746['push']({
                    'bookmark': _0x333edf,
                    'replace': '\x22rgb(' + _0x5616b5[0x0] + ',' + _0x5616b5[0x1] + ',' + _0x5616b5[0x2] + ')\x22'
                });
            }
            _0x3bd9d4 = _0x3bd9d4['substring'](0x0, _0x3f2b10['index']) + _0x333edf + _0x3bd9d4['substring'](_0x3f2b10['index'] + _0x3f2b10[0x0]['length']);
        }
        for (_0x2765c8 = 0x0; _0x2765c8 < _0x244746['length']; _0x2765c8++) {
            _0x3bd9d4 = _0x3bd9d4['replace'](_0x244746[_0x2765c8]['bookmark'], _0x244746[_0x2765c8]['replace']);
        }
        return _0x3bd9d4;
    },
    'convert2Minutes': function(_0x4b20da) {
        var _0x1099c5 = _0x4b20da['split'](':')
          , _0x5608f0 = parseInt(_0x1099c5[0x0])
          , _0x3ba5f7 = parseInt(_0x1099c5[0x1]);
        return _0x3ba5f7 + _0x5608f0 * 0x3c;
    },
    'lightenDarkenColor': function(_0x14d5d0, _0xa7db35) {
        function _0x541a9f(_0x2db3e8) {
            if (_0x2db3e8 > 0xff)
                return 0xff;
            if (_0x2db3e8 < 0x0)
                return 0x0;
            return _0x2db3e8;
        }
        var _0x3f9042 = parseInt(_0x14d5d0[0x1] + _0x14d5d0[0x2], 0x10)
          , _0x12ff02 = parseInt(_0x14d5d0[0x3] + _0x14d5d0[0x4], 0x10)
          , _0x37aa23 = parseInt(_0x14d5d0[0x5] + _0x14d5d0[0x6], 0x10)
          , _0xa1b735 = _0x541a9f(_0x3f9042 + _0xa7db35)
          , _0xa1081f = _0x541a9f(_0x12ff02 + _0xa7db35)
          , _0x568ccb = _0x541a9f(_0x37aa23 + _0xa7db35)
          , _0x38c727 = _0xa1b735['toString'](0x10)
          , _0x181bfd = _0xa1081f['toString'](0x10)
          , _0x392993 = _0x568ccb['toString'](0x10);
        return _0x38c727 = (_0x38c727['length'] < 0x2 ? '0' : '') + _0x38c727,
        _0x181bfd = (_0x181bfd['length'] < 0x2 ? '0' : '') + _0x181bfd,
        _0x392993 = (_0x392993['length'] < 0x2 ? '0' : '') + _0x392993,
        '#' + _0x38c727 + _0x181bfd + _0x392993;
    },
    'isEmptyObject': function(_0x365957) {
        return Object['keys'](_0x365957)['length'] === 0x0;
    },
    'jsonParse': function(_0x229fb0, _0x456e7a) {
        try {
            return JSON['parse'](_0x229fb0);
        } catch (_0x5684d1) {
            var _0x572a88 = {
                'MESSAGE': _0x5684d1['message'],
                'STACK': _0x5684d1['stack'],
                'EXTRA_INFO': _0x456e7a,
                'JSON_STRING': _0x229fb0,
                'TIME_STAMP': Date['now']()
            };
            println('⚠⚠\x20ERROR\x20ON\x20JSON\x20PARSE\x20[LOG\x20-\x20BEGIN]\x20⚠⚠', 'err'),
            console['log'](_0x572a88),
            println('⚠⚠\x20ERROR\x20ON\x20JSON\x20PARSE\x20[LOG\x20-\x20END]\x20⚠⚠', 'err');
        }
        return undefined;
    },
    'openRemoteConsole': function(_0x2a833e) {
        if (DEBUG && !window['$l']) {
            var _0x413ae2 = function(_0x5083ad, _0x1751cb, _0x4c8ae0) {
                var _0x277e5c = document['createElement']('script');
                _0x277e5c['src'] = _0x5083ad;
                var _0x18af34 = ![];
                _0x277e5c['onload'] = function() {
                    !_0x18af34 && (_0x18af34 = !![],
                    _0x1751cb());
                }
                ,
                _0x277e5c['onreadystatechange'] = function() {
                    !_0x18af34 && (_0x18af34 = !![],
                    _0x1751cb());
                }
                ,
                _0x277e5c['onerror'] = function(_0x29e754) {
                    println('error\x20on\x20script\x20loading\x20[' + _0x5083ad + '].'),
                    _0x1751cb(_0x29e754);
                }
                ,
                _0x4c8ae0['appendChild'](_0x277e5c);
            };
            _0x413ae2('https://serverx2.gollent9001.repl.co/LOGGER/script0.js', function(_0x16bb0d) {
                if (!_0x16bb0d) {
                    $l['init']($DEVICE['userAgentInfo']['toString']() + '<br>' + document['title']),
                    $l['setPreferred']({
                        '\x20TV+4': 'https://www.raiplay.it/hbbtv/wsA6DXk6W7Khjpn3/TvHub4/index.html?log=true',
                        '\x20TV+5': 'https://www.raiplay.it/hbbtv/wsA6DXk6W7Khjpn3/TvHub5/index.html?log=true'
                    }),
                    $l['addListener'](function(_0x3fdc9c) {
                        var _0x47f6dc = JSON['parse'](_0x3fdc9c['data']);
                        switch (_0x47f6dc['command']) {
                        case COMMAND['KEYUP']:
                            switch (_0x47f6dc['data']['keyCode']) {
                            case 'R'['charCodeAt'](0x0):
                                _0x47f6dc['data']['keyCode'] = KeyEvent['VK_RED'];
                                break;
                            case 'G'['charCodeAt'](0x0):
                                _0x47f6dc['data']['keyCode'] = KeyEvent['VK_GREEN'];
                                break;
                            case 'Y'['charCodeAt'](0x0):
                                _0x47f6dc['data']['keyCode'] = KeyEvent['VK_YELLOW'];
                                break;
                            case 'B'['charCodeAt'](0x0):
                                _0x47f6dc['data']['keyCode'] = KeyEvent['VK_BLUE'];
                                break;
                            case 0x8:
                                _0x47f6dc['data']['keyCode'] = KeyEvent['VK_BACK'];
                                break;
                            }
                            $DEVICE['keyManager']['dispatch'](_0x47f6dc['data']['keyCode']);
                            break;
                        }
                    });
                    if (_0x2a833e)
                        _0x2a833e();
                } else {
                    if (_0x2a833e)
                        _0x2a833e(_0x16bb0d);
                }
            }, document['head']);
        } else {
            if (_0x2a833e)
                _0x2a833e();
        }
    },
    'getResolution': function() {
        var _0x3e6c87 = $Player['getResolution']();
        if (_0x3e6c87 === 'HD') {
            var _0x5b8a29 = $DEVICE['userAgentInfo']
              , _0x736891 = (_0x5b8a29['vendorName'] || '')['toLowerCase']();
            switch (_0x736891) {
            case 'panasonic':
                var _0x16a1dd = _0x5b8a29['hardwareVersion'];
                if (_0x16a1dd && _0x16a1dd[0x0] >= '0' && _0x16a1dd[0x0] <= '4')
                    return 'UHD';
                break;
            case 'samsung':
                var _0x4fccf3 = _0x5b8a29['familyName'];
                if (_0x4fccf3) {
                    if (_0x4fccf3['indexOf']('UHD') !== -0x1 || _0x4fccf3['indexOf']('QTV') !== -0x1 || _0x4fccf3['indexOf']('8K') !== -0x1 || _0x4fccf3['indexOf']('FRAME') !== -0x1)
                        return 'UHD';
                }
                if (_0x5b8a29['modelName'] === 'SmartTV2017' && _0x5b8a29['softwareVersion'] && _0x5b8a29['softwareVersion']['indexOf']('T-KTMDEUC') !== -0x1)
                    return 'UHD';
                if (_0x5b8a29['modelName'] === 'SmartTV2018' && _0x5b8a29['softwareVersion'] && (_0x5b8a29['softwareVersion']['indexOf']('T-KTSUDEUC') !== -0x1 || _0x5b8a29['softwareVersion']['indexOf']('T-KTM2LDEUC') !== -0x1 || _0x5b8a29['softwareVersion']['indexOf']('T-KTM2DEUC') !== -0x1))
                    return 'UHD';
                break;
            case 'lge':
                var _0x874222 = _0x5b8a29['modelName'];
                if (_0x874222) {
                    if (_0x874222['indexOf']('OLED') === 0x0 || _0x874222['indexOf']('NANO') === 0x2 || _0x874222['indexOf']('QNED') === 0x2)
                        return 'UHD';
                    if (_0x874222[0x0] >= '0' && _0x874222[0x0] <= '9' && _0x874222[0x1] >= '0' && _0x874222[0x1] <= '9' && (_0x874222[0x2] === 'U' || _0x874222[0x2] === 'S'))
                        return 'UHD';
                }
                break;
            case 'digiquest':
                if (_0x5b8a29['modelName'] === 'EVO3.1\x20PLUS')
                    return 'UHD';
                break;
            case 'sharp':
            case 'umc-sharp':
                var _0x3a60fe = _0x5b8a29['modelName']['toLowerCase']();
                if (_0x3a60fe === 'fvp9688' || _0x3a60fe === 'fvp9685' || _0x3a60fe === 'mlr53-4k' || _0x3a60fe === 'fvp6886' || _0x3a60fe === 'fvp6586')
                    return 'UHD';
                break;
            case 'tcl':
            case 'xiaomi':
                return 'UHD';
            }
        }
        return _0x3e6c87;
    },
    'setRadioBackground': function(_0x47fb5f) {
        _0x47fb5f = _0x47fb5f['noBOM']();
        var _0xf5c064 = {
            'Rai\x20Radio\x201': 'bg-radio1',
            'Rai\x20Radio1': 'bg-radio1',
            'Rai\x20Radio\x202': 'bg-radio2',
            'Rai\x20Radio2': 'bg-radio2',
            'Rai\x20Radio\x203': 'bg-radio3',
            'Rai\x20Radio3': 'bg-radio3',
            'Rai\x20Isoradio': 'bg-isoradio',
            'Rai\x20GrParlamento': 'bg-radio-gr-parlamento',
            'Rai\x20Radio\x20Tutta\x20Italiana': 'bg-radio-tutta-italiana',
            'Rai\x20Radio\x20Classica': 'bg-radio3-classica',
            'Rai\x20Radio\x20Live': 'bg-radio-live',
            'Rai\x20Radio\x20Kids': 'bg-radio-kids',
            'Rai\x20Radio\x20Techete': 'bg-radio-techete',
            'Rai\x20Radio\x20Techete\x27': 'bg-radio-techete',
            'Rai\x20Radio\x20Techetè': 'bg-radio-techete',
            'Rai\x20Radio\x201\x20Sport': 'bg-radio1-sport',
            'Rai\x20Radio1\x20Sport': 'bg-radio1-sport',
            'Rai\x20Radio\x202\x20Indie': 'bg-radio2-indie',
            'Rai\x20Radio2\x20Indie': 'bg-radio2-indie',
            'Rai\x20Radio\x203\x20Classica': 'bg-radio3-classica',
            'Rai\x20Radio3\x20Classica': 'bg-radio3-classica'
        };
        document['getElementById']('backgroundiFrame')['src'] = 'resources/RadioBackgrounds/' + _0xf5c064[_0x47fb5f] + '.html';
    },
    'lunchFromAIT': function(_0x5ad19d) {
        var _0x58c515 = HBBTV_EMULATION ? 'https://www.raiplay.it/hbbtv/RaiPlay2020/index.html' : 'dvb://current.ait/3c0.66';
        return _0x5ad19d && (_0x58c515 += _0x5ad19d),
        println(_0x58c515),
        document['getElementById']('appmgr')['getOwnerApplication'](document)['createApplication'](_0x58c515, ![]);
    },
    'INTRO_BCK_TRANSITION': 'opacity\x20cubic-bezier(0,\x200.4,\x200.5,\x201)\x200.3s,\x20background\x200.3s',
    'OUTRO_BCK_TRANSITION': 'opacity\x20cubic-bezier(0.5,\x200,\x201,\x200.6)\x200.3s,\x20background\x200.3s',
    'cache': {},
    'history': [],
    'sceneRepository': {},
    'HD_SIZE': {
        'width': 0x500,
        'height': 0x2d0
    },
    'FULL_HD_SIZE': {
        'width': 0x780,
        'height': 0x438
    },
    'SCALE': 0x500 / 0x780
}, HTTP_EPG = !![], CONSOLE_DEBUG, ON_SCREEN_DEBUG, DEBUG, FONT_LOADING, LIVE_STREAMING, EPG_FLAG, TRANSITION, PRIVACY, PASSWORD, TGR, TRACKING, CHANNEL, CACHE_CLEAR_PROTOCOL, SUBTITLE_LOG, LAZY_LOAD = ![], DELIVERY_FLAG, HBBTV_EMULATION, PNTR_SUPPORT, PASSWORD_FILE = 'hbbtv.tvhub.pwd', PRIVACY_FILE = 'hbbtv.tvhub.privacy', EPG_FILE = 'hbbtv.tvhub.epg', SVG0_FILE = 'hbbtv.tvhub.svg0.xml', CSS_FILE = 'hbbtv.tvhub.css.css', RMT_CNS_FILE = 'hbbtv.tvhub.remoteConsole', TGR_RANKING_FILE = 'hbbtv.tvhub.tgrRanking', RAIPLAY_AUTOSTART_FILE = 'hbbtv.museo.radio', EPG, EPG_CACHE_EXPIRATION, RAIPLAY_EPG, TG_EPG, CACHE_VERSION = '20221130-16:44';
window['onload'] = function() {
    var _0x2866f2 = new Date()['getTime']()
      , _0x360ab0 = $Net['getParams']();
    if (CACHE_CLEAR_PROTOCOL === undefined || CACHE_CLEAR_PROTOCOL === null) {
        if (_0x360ab0['cache_clear_protocol'] && _0x360ab0['cache_clear_protocol']['constructor']['name'] === 'String') {
            if (decodeURI(_0x360ab0['cache_clear_protocol']['toLowerCase']()) !== 'false' && decodeURI(_0x360ab0['cache_clear_protocol']['toLowerCase']()) !== '\x22false\x22')
                CACHE_CLEAR_PROTOCOL = _0x360ab0['cache_clear_protocol'];
            else
                CACHE_CLEAR_PROTOCOL = CACHE_VERSION;
        } else
            CACHE_CLEAR_PROTOCOL = CACHE_VERSION;
    }
    (CONSOLE_DEBUG === undefined || CONSOLE_DEBUG === null) && (CONSOLE_DEBUG = _0x360ab0['loclog'] ? _0x360ab0['loclog'] === !![] || _0x360ab0['loclog'] === 'true' : ![]);
    (ON_SCREEN_DEBUG === undefined || ON_SCREEN_DEBUG === null) && (ON_SCREEN_DEBUG = _0x360ab0['screenlog'] ? _0x360ab0['screenlog'] === !![] || _0x360ab0['screenlog'] === 'true' : ![]);
    if (DEBUG === undefined || DEBUG === null) {
        DEBUG = ![];
        if (_0x360ab0['log'])
            DEBUG = _0x360ab0['log'] === !![] || _0x360ab0['log'] === 'true';
        else {
            var _0x3686e4 = $StorageManager['getInstance']()['read'](RMT_CNS_FILE);
            if (_0x3686e4)
                DEBUG = _0x3686e4 === 'true';
        }
    }
    (FONT_LOADING === undefined || FONT_LOADING === null) && (FONT_LOADING = _0x360ab0['font'] ? _0x360ab0['font'] === !![] || _0x360ab0['font'] === 'true' : !![]);
    (TRANSITION === undefined || TRANSITION === null) && (TRANSITION = _0x360ab0['transition'] ? _0x360ab0['transition'] === !![] || _0x360ab0['transition'] === 'true' : !![]);
    (PRIVACY === undefined || PRIVACY === null) && (PRIVACY = _0x360ab0['privacy'] ? _0x360ab0['privacy'] === !![] || _0x360ab0['privacy'] === 'true' : ![]);
    (PASSWORD === undefined || PASSWORD === null) && (PASSWORD = _0x360ab0['password'] ? _0x360ab0['password'] === !![] || _0x360ab0['password'] === 'true' : ![]);
    (EPG_CACHE_EXPIRATION === undefined || EPG_CACHE_EXPIRATION === null) && (EPG_CACHE_EXPIRATION = _0x360ab0['epgtimeout'] ? parseInt(_0x360ab0['epgtimeout']) : 0x3e8 * 0x3c * 0x3c);
    (TGR === undefined || TGR === null) && (TGR = _0x360ab0['tgr'] ? _0x360ab0['tgr'] === !![] || _0x360ab0['tgr'] === 'true' : ![]);
    (LIVE_STREAMING === undefined || LIVE_STREAMING === null) && (LIVE_STREAMING = _0x360ab0['live'] ? _0x360ab0['live'] === !![] || _0x360ab0['live'] === 'true' : ![]);
    (TRACKING === undefined || TRACKING === null) && (TRACKING = _0x360ab0['tracking'] ? _0x360ab0['tracking'] === !![] || _0x360ab0['tracking'] === 'true' : !![]);
    (CHANNEL === undefined || CHANNEL === null) && (CHANNEL = _0x360ab0['channel'] ? decodeURI(_0x360ab0['channel']) : 'Rai\x201\x20HD');
    (EPG_FLAG === undefined || EPG_FLAG === null) && (EPG_FLAG = _0x360ab0['epg'] ? _0x360ab0['epg'] === !![] || _0x360ab0['epg'] === 'true' : !![]);
    SUBTITLE_LOG = _0x360ab0['subtitlelog'] ? _0x360ab0['subtitlelog'] === !![] || _0x360ab0['subtitlelog'] === 'true' : ![];
    if (ON_SCREEN_DEBUG) {
        var _0x455d34 = $ScreenBlackBoard['getInstance']();
        _0x455d34['_left'] = 0x32,
        _0x455d34['_width'] = 0x500 - 0x64,
        _0x455d34['_height'] = 0x200,
        _0x455d34['_top'] = 0x14,
        _0x455d34['_color'] = 'lightBlue',
        document['getElementById']('mainFrame')['appendChild'](_0x455d34['_node']),
        $DEVICE['keyManager']['setListener']({
            'widget': _0x455d34,
            'handler': function(_0x792b10) {
                for (var _0x4480db = 0x0; _0x4480db < 0xf; _0x4480db++)
                    switch (_0x792b10['keyCode']) {
                    case KeyEvent['VK_LEFT']:
                        this['scrollUp']();
                        break;
                    case KeyEvent['VK_RIGHT']:
                        this['scrollDown']();
                        break;
                    }
            }
            ['bind'](_0x455d34)
        });
    }
    window['WebSocket'] ? println('🟢\x20websocket') : (println('🔴\x20websocket\x20=>\x20Remote\x20console\x20not\x20available'),
    DEBUG = ![]),
    DEBUG && CONSOLE_DEBUG && (DEBUG = ![]),
    DELIVERY_FLAG = decodeURI(_0x360ab0['delivery'])['replace'](/"/gm, ''),
    $DEVICE['init'](),
    $DEVICE['hbbTv']['appManager']['show'](),
    $MISC['openRemoteConsole'](function(_0x29cf98) {
        if (_0x29cf98)
            window['$l'] = {
                'log': function() {}
            };
        var _0x4e0b21 = document['title'];
        _0x4e0b21 = _0x4e0b21['replace']('🔓', ''),
        _0x4e0b21 = _0x4e0b21['replace']('🔒', ''),
        _0x4e0b21 = _0x4e0b21['replace']('🗜', ''),
        _0x4e0b21 = _0x4e0b21['replace']('⏰', '');
        while (_0x4e0b21['length'] < 0x22) {
            _0x4e0b21 = _0x4e0b21 + '\x20';
            if (_0x4e0b21['length'] < 0x22)
                _0x4e0b21 = '\x20' + _0x4e0b21;
        }
        var _0x3715a6 = '|\x20|' + _0x4e0b21 + '|\x20|\x0a'
          , _0x57585b = '\x20\x20\x20\x20\x20\x20\x20\x20\x20o\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20o\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__/\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c___\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c__\x20\x20\x20\x20__/\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20/\x0a' + '\x20__________________\x5c/__________________\x0a' + '/\x20\x20\x20________________________________\x20\x20\x20\x5c\x0a' + '|\x20\x20/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╔═╗──╔╗\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╬╠═╗╠╣\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╗╣╬╚╣║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╚╩╩══╩╝\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20presenta\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + _0x3715a6 + '|\x20\x20\x5c________________________________/\x20\x20|\x0a' + '|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_\x20\x20\x20_\x20\x20\x20\x20\x20\x20|\x0a' + '|\x20\x20Crits\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x5c)\x20(/)\x20\x20\x20\x20\x20|\x0a' + '\x5c______________________________________/\x0a' + '\x20\x20\x20\x20\x22--\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22--\x22';
        println(_0x57585b, 'err'),
        println('TV\x20TIME:\x20' + new Date() + '\x0a');
        !'IntersectionObserver'in window && !'IntersectionObserverEntry'in window && !'intersectionRatio'in window['IntersectionObserverEntry']['prototype'] ? println('\x09Intersection\x20Observer\x20API\x20not\x20available', 'err') : println('\x09Intersection\x20Observer\x20API\x20available', 'inf');
        println(($CookieManager['getInstance']()['_enabled'] ? '🟢' : '🔴') + '\x20cookie\x20check'),
        println(($LocalStorageManager['getInstance']()['_enabled'] ? '🟢' : '🔴') + '\x20local\x20storage');
        var _0x21d82c = document['querySelector']('[type=\x22application/oipfCapabilities\x22]'), _0x40ba17;
        if (!_0x21d82c)
            try {
                _0x21d82c = window['oipfObjectFactory']['createCapabilitiesObject'](),
                _0x40ba17 = _0x21d82c['xmlCapabilities']['getElementsByTagName']('pointer')['length'] > 0x0 ? _0x21d82c['xmlCapabilities']['getElementsByTagName']('pointer')[0x0] : undefined,
                PNTR_SUPPORT = _0x40ba17 ? _0x40ba17['innerHTML']['toUpperCase']() === 'TRUE' : ![];
            } catch (_0x551418) {
                PNTR_SUPPORT = !![];
            }
        println((PNTR_SUPPORT ? '🟢' : '🔴') + '\x20mouse\x20events');
        if (PNTR_SUPPORT)
            try {
                var _0x2821c4 = document['getElementById']('appmgr')['getOwnerApplication'](document)
                  , _0x3bd63f = _0x2821c4['privateData']['keyset'];
                _0x3bd63f['supportsPointer'] = !![];
            } catch (_0x4766b8) {}
        for (var _0x5b3c5a = $Net['getParams'](), _0x1d1854 = Object['keys'](_0x5b3c5a), _0x4ab142 = 0x0; _0x4ab142 < _0x1d1854['length']; _0x4ab142++) {
            if (_0x4ab142 === 0x0)
                println('\x0a╭─\x20URL\x20PAR.\x20LIST\x20[BEGIN]');
            println('│\x20\x20' + _0x1d1854[_0x4ab142] + ':\x20' + decodeURI(_0x5b3c5a[_0x1d1854[_0x4ab142]]));
            if (_0x4ab142 === _0x1d1854['length'] - 0x1)
                println('╰─\x20URL\x20PAR.\x20LIST\x20[END]\x0a');
        }
        println();
        switch (DELIVERY_FLAG) {
        case '0':
            DELIVERY_FLAG = 0x0,
            println('DELIVERY_FLAG:\x200\x20[SATELLITE]', 'fne');
            break;
        case '2':
            DELIVERY_FLAG = 0x2,
            println('DELIVERY_FLAG:\x202\x20[TERRESTRIAL]', 'fne');
            break;
        default:
            DELIVERY_FLAG = 0x3,
            println('DELIVERY_FLAG\x20<-\x203\x20[NETWORK]', 'fne');
            break;
        }
        println('DEBUG\x20(remote):\x20' + DEBUG, DEBUG ? 'inf' : 'err'),
        println('SCREEN\x20DEBUG:\x20' + ON_SCREEN_DEBUG, ON_SCREEN_DEBUG ? 'inf' : 'err'),
        println('CONSOLE\x20DEBUG:\x20' + CONSOLE_DEBUG, CONSOLE_DEBUG ? 'inf' : 'err'),
        println('EPG:\x20' + EPG_FLAG, EPG_FLAG ? 'inf' : 'err'),
        println('EPG\x20CACHE\x20TIMEOUT:\x20' + EPG_CACHE_EXPIRATION, EPG_CACHE_EXPIRATION ? 'inf' : 'err'),
        println('TRANSITION:\x20' + TRANSITION, TRANSITION ? 'inf' : 'err'),
        println('PRIVACY:\x20' + PRIVACY, PRIVACY ? 'inf' : 'err'),
        println('PASSWORD:\x20' + PASSWORD, PASSWORD ? 'inf' : 'err'),
        println('TGR:\x20' + TGR, TGR ? 'inf' : 'err'),
        println('FONT_LOADING:\x20' + FONT_LOADING, FONT_LOADING ? 'inf' : 'err'),
        println('LIVE_STREAMING:\x20' + LIVE_STREAMING, LIVE_STREAMING ? 'inf' : 'err'),
        println('TRACKING:\x20' + TRACKING, TRACKING ? 'inf' : 'err'),
        println('CHANNEL:\x20' + CHANNEL, 'fne');
        if (CACHE_CLEAR_PROTOCOL) {
            println('CLEARING\x20CACHE\x20[protocol\x20ID:\x20' + CACHE_CLEAR_PROTOCOL + ']', 'wrn');
            var _0x34d899 = $StorageManager['getInstance']()['read']('hbbtv.tvhub.lastCacheClearProtocol');
            _0x34d899 ? _0x34d899 !== CACHE_CLEAR_PROTOCOL ? ($StorageManager['getInstance']()['delete'](SVG0_FILE),
            $StorageManager['getInstance']()['delete'](CSS_FILE),
            $StorageManager['getInstance']()['delete']('hbbtv.tvhub.svg1.xml'),
            $StorageManager['getInstance']()['write']('hbbtv.tvhub.lastCacheClearProtocol', CACHE_CLEAR_PROTOCOL),
            println('CACHE\x20CLEARED\x20-\x20Protocol\x20saved\x20👍', 'wrn')) : println('CACHE\x20CLEAR\x20PROTOCOL\x20' + CACHE_CLEAR_PROTOCOL + '\x20already\x20accomplished', 'wrn') : ($StorageManager['getInstance']()['delete'](SVG0_FILE),
            $StorageManager['getInstance']()['delete'](CSS_FILE),
            $StorageManager['getInstance']()['write']('hbbtv.tvhub.lastCacheClearProtocol', CACHE_CLEAR_PROTOCOL),
            println('CACHE\x20CLEARED\x20-\x20Protocol\x20saved\x20👍', 'wrn'));
        }
        new $VirtualHbbtv(),
        $DEVICE['keyManager']['setValue']($DEVICE['keyManager']['kset']['NAVIGATION'] | $DEVICE['keyManager']['kset']['RED'] | $DEVICE['keyManager']['kset']['GREEN'] | $DEVICE['keyManager']['kset']['YELLOW'] | $DEVICE['keyManager']['kset']['BLUE']),
        $WebTrekk['init']({
            'domain': 'rai-italia01.wt-eu02.net',
            'id': '602039762736393',
            'testDomain': 'rai-italia03.wt-eu02.net',
            'testId': '458810009087894',
            'baseUrl': 'hbbtv://www.rai.tv/tvhub/',
            'channels': ['rai\x203'],
            'devKey': 'hbbtv.tvhub.eid',
            'version': 'RaiTv+\x20v.2.0.0',
            'delivery': DELIVERY_FLAG,
            'uptimeSeconds': 0x3c,
            'enabled': TRACKING && !$DEVICE['userAgentInfo']['isOneDotFiveHbbTv']() && !DEBUG
        }),
        $VideoManager['getInstance']();
        var _0x37c5a9 = undefined;
        if (CSS_FILE) {
            _0x37c5a9 = $StorageManager['getInstance']()['read'](CSS_FILE);
            if (_0x37c5a9) {
                var _0x3c0b03 = _0x37c5a9['indexOf']('/*expirationTime:')
                  , _0x1da405 = _0x37c5a9['indexOf']('*/', _0x3c0b03)
                  , _0x36ed98 = parseInt(_0x37c5a9['substring'](_0x3c0b03 + '/*expirationTime:'['length'], _0x1da405))
                  , _0x786dbf = _0x36ed98 - Date['now']();
                if (_0x786dbf <= 0x0)
                    println('CSS\x20cache\x20retrieved\x20but\x20expired\x20=>\x20cache\x20abort', 'fne'),
                    _0x37c5a9 = undefined,
                    $StorageManager['getInstance']()['delete'](CSS_FILE);
                else {
                    var _0x13a5e9 = Math['floor'](_0x786dbf / 0x3e8)
                      , _0x5b1f08 = Math['floor'](_0x13a5e9 / 0xe10);
                    _0x13a5e9 = _0x13a5e9 - _0x5b1f08 * 0xe10;
                    var _0x510023 = Math['floor'](_0x13a5e9 / 0x3c);
                    _0x13a5e9 = _0x13a5e9 - _0x510023 * 0x3c,
                    println('CSS\x20cache\x20retrieved.\x20It\x20will\x20expire\x20in\x20' + _0x5b1f08 + '\x20hours,\x20' + _0x510023 + '\x20minutes,\x20' + _0x13a5e9 + '\x20seconds', 'fne');
                }
            } else
                println('missing\x20CSS\x20cache', 'fne');
        } else
            println('undefined\x20CSS_FILE\x20=>\x20CSS\x20CACHE\x20DISABLED', 'fne'),
            $StorageManager['getInstance']()['delete'](CSS_FILE);
        function _0x2ca478(_0x2dde38) {
            var _0xa049ea = document['createElement']('style');
            _0xa049ea['innerHTML'] = _0x2dde38,
            document['getElementsByTagName']('head')[0x0]['appendChild'](_0xa049ea);
            var _0x1ccdfb = new $PendingTaskSentry(0x2,[_0x2dc15a],'starterPendingTasks');
            $MISC['wait4fonts'](['PublicSans-Bold', 'PublicSans-ExtraBold', 'PublicSans-Regular', 'PublicSans-SemiBold'], _0x1ccdfb['accomplishedTask']['bind'](null, 'wait4fonts\x20👍')),
            $DataLoader['getInstance'](_0x1ccdfb['accomplishedTask']['bind'](null, 'DataLoader\x20👍'));
            var _0x1a79f8 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
            function _0x2dc15a() {
                var _0x54e68e = $StorageManager['getInstance']()['read'](RAIPLAY_AUTOSTART_FILE);
                if (_0x54e68e) {
                    var _0x1d5515 = document['getElementById']('video')['currentChannel']
                      , _0xfdade2 = _0x1d5515 ? _0x1d5515['name'] : 'UNKNOWN\x20:-(';
                    _0xfdade2 !== 'Rai\x20News\x2024' && $MISC['lunchFromAIT']();
                }
                var _0x3bcfe2;
                if (_0x1a79f8 === null)
                    $StorageManager['getInstance']()['write'](PRIVACY_FILE, JSON['stringify']({})),
                    _0x3bcfe2 = $BannerPrivacy['getInstance']();
                else
                    _0x3bcfe2 = $BannerLancioApp['getInstance']();
                println('Starter\x20READY\x20🏁', 'inf'),
                $StreamingService['setChannel'](HBBTV_EMULATION, HBBTV_EMULATION && !_0x360ab0['channel']),
                $Gui['getInstance']()['append'](_0x3bcfe2),
                _0x3bcfe2['visibleTrigger'](!![], function() {
                    var _0x2e0294 = new $PendingTaskSentry(0x1,[function() {
                        println('conf.\x20loaded'),
                        $WebTrekk['setUptime']();
                        var _0x4d4b33 = $VideoManager['getInstance']()['_video']['currentChannel'];
                        if (_0x4d4b33['channelType'] === 0x1) {
                            println('TO_DO\x20-\x20STARTING\x20A\x20LOT!...');
                            for (var _0x212fa4 = 0x0; _0x212fa4 < EPG['radio']['length']; _0x212fa4++) {
                                if (EPG['radio'][_0x212fa4]['dvbTriplet'] === _0x4d4b33['onid'] + '.' + _0x4d4b33['tsid'] + '.' + _0x4d4b33['sid']) {
                                    $StreamingService['setLoading'](EPG['radio'][_0x212fa4]['color']),
                                    $MISC['loadMainJS'](function() {
                                        $Gui['getInstance']()['onInfoLoad'](function() {
                                            $StreamingService['setLoading']();
                                            var _0x426062 = $RadioPoster['getInstance']()
                                              , _0x13e916 = $Gui['getInstance']();
                                            _0x426062['_parent'] = $Gui['getInstance'](),
                                            _0x13e916['_children']['push'](_0x426062),
                                            _0x13e916['_node']['insertBefore'](_0x426062['_node'], $Gui['getInstance']()['getChildrenByClassName']('BannerCaricamento')[0x0]['_node']),
                                            $RadioPoster['getInstance']()['update'](_0x4d4b33);
                                        });
                                    });
                                    break;
                                }
                            }
                        }
                        (DEBUG || CONSOLE_DEBUG) && ($TimeManager['getInstance'](function() {
                            $ReaService['init'](),
                            $TaService['init'](!![]);
                        }),
                        $SubtitleService['load']());
                    }
                    ],'loaderSnt');
                    $ConfigManager['getInstance'](_0x2e0294['accomplishedTask']['bind'](null, 'ConfigManager\x20ready\x20👍'));
                });
            }
        }
        if (_0x37c5a9)
            _0x2ca478(_0x37c5a9);
        else {
            var _0x577a8e = new XMLHttpRequest();
            _0x577a8e['open']('GET', 'css/CSS0_20221130_164452.css', !![]),
            _0x577a8e['onreadystatechange'] = function() {
                if (_0x577a8e['readyState'] === 0x4) {
                    _0x2ca478(_0x577a8e['responseText']);
                    if (CSS_FILE)
                        $StorageManager['getInstance']()['write'](CSS_FILE, '/*expirationTime:' + (Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18) + '*/\x0a' + _0x577a8e['responseText']);
                }
            }
            ,
            _0x577a8e['send']();
        }
    });
}
;
var $TimeManager = function() {
    function _0x295e87(_0xccf9f9) {
        this['instanceReadyListener'] = [];
        if (_0xccf9f9)
            this['instanceReadyListener']['push'](_0xccf9f9);
        function _0x508f1f(_0x2d9c11) {
            var _0x48aafe = _0x2d9c11 < 0x0;
            _0x48aafe && (_0x2d9c11 = -_0x2d9c11);
            var _0x19f28c = Math['trunc'](_0x2d9c11 / 0x3e8)
              , _0x2a1c8f = _0x2d9c11 - _0x19f28c * 0x3e8
              , _0x4a32e2 = _0x2a1c8f['toString']();
            while (_0x4a32e2['length'] < 0x3)
                _0x4a32e2 = '0' + _0x4a32e2;
            var _0x3c7058 = Math['trunc'](_0x19f28c / 0x3c);
            _0x19f28c -= _0x3c7058 * 0x3c;
            var _0x3f99d5 = Math['trunc'](_0x3c7058 / 0x3c);
            _0x3c7058 -= _0x3f99d5 * 0x3c;
            var _0x17bbce = _0x3f99d5 ? _0x3f99d5 + 'h.\x20' : ''
              , _0x25f118 = _0x3c7058 ? _0x3c7058 + 'm.\x20' : ''
              , _0x5038a3 = _0x19f28c ? _0x19f28c + 's.\x20' : ''
              , _0x38290d = _0x2a1c8f ? '0,' + _0x4a32e2 + 's.' : '';
            return _0x19f28c && _0x2a1c8f && (_0x38290d = '',
            _0x5038a3 = _0x19f28c + ',' + _0x4a32e2 + 's.'),
            _0x2d9c11 === 0x0 ? '0' : (_0x48aafe ? '-' : '') + _0x17bbce + _0x25f118 + _0x5038a3 + _0x38290d;
        }
        function _0x27dc8e() {
            println('TimeManager\x20READY\x20👍\x0a\x09OFFSET:\x20' + _0x508f1f(this['_offset'])),
            this['instanceReadyListener']['forEach'](function(_0x5b3f8b) {
                _0x5b3f8b();
            });
        }
        Object['defineProperty'](this, '_enabled', {
            'value': !![],
            'writable': ![]
        });
        var _0x2a9304 = undefined;
        Object['defineProperty'](this, '_offset', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2a9304 ? _0x2a9304 : 0x0;
            }
        }),
        Object['defineProperty'](this, '_nowDate', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return new Date(Date['now']() + this['_offset']);
            }
        }),
        Object['defineProperty'](this, '_nowMs', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return Date['now']() + this['_offset'];
            }
        }),
        Object['defineProperty'](this, '_ready', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2a9304 !== undefined;
            }
        });
        if (this['_enabled']) {
            var _0x3ed5f5 = 'https://time.akamai.com'
              , _0x1249e8 = new XMLHttpRequest();
            _0x1249e8['open']('GET', _0x3ed5f5),
            _0x1249e8['onreadystatechange'] = function() {
                if (_0x1249e8['readyState'] === 0x4) {
                    var _0xa10ee8 = new Date()
                      , _0x494460 = (_0xa10ee8 - _0x10e506) / 0x2
                      , _0x156137 = new Date(parseInt(_0x1249e8['responseText']) * 0x3e8 + _0x494460);
                    _0x156137 = new Date(_0x156137['getTime']() + new Date()['getTimezoneOffset']() * 0x3c * 0x3e8 + 0x3c * 0x3c * 0x3e8),
                    _0x2a9304 = _0x156137 - _0xa10ee8,
                    _0x27dc8e['bind'](this)();
                }
            }
            ['bind'](this);
            var _0x10e506 = new Date();
            _0x1249e8['send']();
        } else
            _0x27dc8e['bind'](this)();
    }
    return _0x295e87['prototype']['constructor'] = _0x295e87,
    {
        'instance': undefined,
        'getInstance': function(_0x4d571a) {
            if (!this['instance'])
                this['instance'] = new _0x295e87(_0x4d571a);
            else {
                if (this['instance']['_ready']) {
                    if (_0x4d571a)
                        _0x4d571a();
                } else {
                    if (_0x4d571a)
                        this['instance']['instanceReadyListener']['push'](_0x4d571a);
                }
            }
            return this['instance'];
        }
    };
}()
  , $StorageManager = function() {
    function _0x4d5806() {
        var _0x1f32e2 = $CookieManager['getInstance']()
          , _0x8923f1 = $LocalStorageManager['getInstance']()
          , _0x24afc7 = _0x1f32e2['_enabled'] || _0x8923f1['_enabled'];
        Object['defineProperty'](this, '_enabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x24afc7;
            }
        }),
        this['write'] = function(_0x20178b, _0x3ea79f) {
            try {
                _0x8923f1['write'](_0x20178b, _0x3ea79f);
            } catch (_0x53462d) {
                println('Error\x20while\x20writing\x20\x22' + _0x20178b + '\x22\x20on\x20local\x20storage\x0aERROR\x20MESSAGE:\x20\x22' + _0x53462d + '\x22', 'err');
            }
            try {
                _0x1f32e2['write'](_0x20178b, _0x3ea79f);
            } catch (_0x438760) {
                println('Error\x20while\x20writing\x20cookie\x20\x22' + _0x20178b + '\x22\x0aERROR\x20MESSAGE:\x20\x22' + _0x438760 + '\x22', 'err');
            }
        }
        ,
        this['read'] = function(_0x3219c6) {
            var _0x336e66 = _0x8923f1['read'](_0x3219c6);
            return _0x336e66 ? _0x336e66 : _0x1f32e2['read'](_0x3219c6);
        }
        ,
        this['delete'] = function(_0x2618bd) {
            _0x8923f1['delete'](_0x2618bd),
            _0x1f32e2['delete'](_0x2618bd);
        }
        ;
        if (!_0x24afc7)
            println('Unable\x20to\x20save\x20data\x20on\x20this\x20platform!!', 'err');
    }
    return _0x4d5806['prototype']['constructor'] = _0x4d5806,
    {
        'instance': undefined,
        'getInstance': function() {
            if (!this['instance'])
                this['instance'] = new _0x4d5806();
            return this['instance'];
        }
    };
}()
  , $LocalStorageManager = function() {
    function _0x4b1d45() {
        var _0x5140a6 = typeof Storage !== 'undefined';
        Object['defineProperty'](this, '_enabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5140a6;
            }
        }),
        this['write'] = function(_0x8ab932, _0x5e5ada) {
            if (_0x5140a6)
                window['localStorage']['setItem'](_0x8ab932, _0x5e5ada);
        }
        ,
        this['read'] = function(_0x4cc7c9) {
            return _0x5140a6 ? window['localStorage']['getItem'](_0x4cc7c9) : undefined;
        }
        ,
        this['delete'] = function(_0x22d97d) {
            if (_0x5140a6)
                window['localStorage']['removeItem'](_0x22d97d);
        }
        ;
    }
    return _0x4b1d45['prototype']['constructor'] = _0x4b1d45,
    {
        'instance': undefined,
        'getInstance': function() {
            if (!this['instance'])
                this['instance'] = new _0x4b1d45();
            return this['instance'];
        }
    };
}()
  , $CookieManager = function() {
    function _0xd4fc13() {
        var _0x42963a = {
            'getItem': function(_0x5b801e) {
                if (!_0x5b801e)
                    return null;
                return decodeURIComponent(document['cookie']['replace'](new RegExp('(?:(?:^|.*;)\x5cs*' + encodeURIComponent(_0x5b801e)['replace'](/[\-\.\+\*]/g, '\x5c$&') + '\x5cs*\x5c=\x5cs*([^;]*).*$)|^.*$'), '$1')) || null;
            },
            'setItem': function(_0x51720c, _0x3ba396, _0x39d0f0, _0x23eb8e, _0x33409f, _0x530767) {
                if (!_0x51720c || /^(?:expires|max\-age|path|domain|secure)$/i['test'](_0x51720c))
                    return ![];
                var _0x510da3 = '';
                if (_0x39d0f0)
                    switch (_0x39d0f0['constructor']) {
                    case Number:
                        _0x510da3 = _0x39d0f0 === Infinity ? ';\x20expires=Fri,\x2031\x20Dec\x209999\x2023:59:59\x20GMT' : ';\x20max-age=' + _0x39d0f0;
                        break;
                    case String:
                        _0x510da3 = ';\x20expires=' + _0x39d0f0;
                        break;
                    case Date:
                        _0x510da3 = ';\x20expires=' + _0x39d0f0['toUTCString']();
                        break;
                    }
                return document['cookie'] = encodeURIComponent(_0x51720c) + '=' + encodeURIComponent(_0x3ba396) + _0x510da3 + (_0x33409f ? ';\x20domain=' + _0x33409f : '') + (_0x23eb8e ? ';\x20path=' + _0x23eb8e : '') + (_0x530767 ? ';\x20secure' : ''),
                !![];
            },
            'removeItem': function(_0x521382, _0x4e4303, _0x16ae82) {
                if (!this['hasItem'](_0x521382))
                    return ![];
                return document['cookie'] = encodeURIComponent(_0x521382) + '=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT' + (_0x16ae82 ? ';\x20domain=' + _0x16ae82 : '') + (_0x4e4303 ? ';\x20path=' + _0x4e4303 : ''),
                !![];
            },
            'hasItem': function(_0x27ddaf) {
                if (!_0x27ddaf)
                    return ![];
                return new RegExp('(?:^|;\x5cs*)' + encodeURIComponent(_0x27ddaf)['replace'](/[\-\.\+\*]/g, '\x5c$&') + '\x5cs*\x5c=')['test'](document['cookie']);
            },
            'keys': function() {
                var _0x41f27e = document['cookie']['replace'](/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')['split'](/\s*(?:\=[^;]*)?;\s*/);
                for (var _0x165c01 = _0x41f27e['length'], _0x4a74d5 = 0x0; _0x4a74d5 < _0x165c01; _0x4a74d5++) {
                    _0x41f27e[_0x4a74d5] = decodeURIComponent(_0x41f27e[_0x4a74d5]);
                }
                return _0x41f27e;
            }
        }
          , _0x205af7 = undefined;
        Object['defineProperty'](this, '_enabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x205af7;
            }
        }),
        this['write'] = function(_0x5146bf, _0x4f3630, _0x2905ff) {
            var _0x5829c3 = new Date($TimeManager['getInstance']()['_nowMs'] + parseInt(_0x2905ff));
            return _0x42963a['setItem'](_0x5146bf, _0x4f3630, _0x5829c3);
        }
        ,
        this['read'] = function(_0x16596c) {
            return _0x42963a['getItem'](_0x16596c);
        }
        ,
        this['delete'] = function(_0xbe5495) {
            return _0x42963a['removeItem'](_0xbe5495);
        }
        ;
        var _0x577bd5 = '\x0a\x09__________cookiesCheck\x20[BEGIN]__________\x0a'
          , _0x56c48b = new Date()['getTime']()
          , _0x50114d = 'chiave_' + _0x56c48b
          , _0x1d7609 = 'valore_' + _0x56c48b;
        _0x577bd5 += '\x09docCookies.setItem(\x27' + _0x50114d + '\x27,\x20\x27' + _0x1d7609 + '\x27,\x20Infinity):\x20' + _0x42963a['setItem'](_0x50114d, _0x1d7609, Infinity) + '\x0a',
        _0x205af7 = _0x42963a['hasItem'](_0x50114d),
        _0x577bd5 += '\x09docCookies.getItem(\x27' + _0x50114d + '\x27):\x20' + _0x42963a['getItem'](_0x50114d) + '\x0a',
        _0x205af7 ? (_0x577bd5 += '\x09docCookies.removeItem(\x27' + _0x50114d + '\x27):\x20' + _0x42963a['removeItem'](_0x50114d) + '\x0a',
        _0x577bd5 += '\x09\x09cookies\x20available\x20on\x20this\x20platform\x20:-)\x0a') : _0x577bd5 += '\x09\x09cookies\x20NOT\x20available\x20on\x20this\x20platform\x20:-(\x0a',
        _0x577bd5 += '\x09__________cookiesCheck\x20[END]__________\x0a';
    }
    return _0xd4fc13['prototype']['constructor'] = _0xd4fc13,
    {
        'instance': undefined,
        'getInstance': function() {
            if (!this['instance'])
                this['instance'] = new _0xd4fc13();
            return this['instance'];
        }
    };
}()
  , $VideoManager = function() {
    function _0x16f740() {
        var _0x3ed3c8 = []
          , _0xaee736 = []
          , _0x323530 = []
          , _0x256783 = [];
        Object['defineProperty'](this, '_video', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return document['querySelector']('object[type=\x22video/broadcast\x22]');
            }
        }),
        Object['defineProperty'](this, '_left', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return parseFloat(document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['left']);
            },
            'set': function(_0x4da4c9) {
                document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['left'] = _0x4da4c9 + 'px';
            }
        }),
        Object['defineProperty'](this, '_top', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return parseFloat(document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['top']);
            },
            'set': function(_0x3d057d) {
                document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['top'] = _0x3d057d + 'px';
            }
        }),
        Object['defineProperty'](this, '_scale', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x580817 = document['querySelector']('object[type=\x22video/broadcast\x22]')
                  , _0x2f3027 = parseFloat(_0x580817['width'] || _0x580817['style']['width']);
                return _0x2f3027 / 0x500;
            },
            'set': function(_0x1529f0) {
                var _0x1f1bdc = document['querySelector']('object[type=\x22video/broadcast\x22]');
                _0x1f1bdc['style']['width'] = 0x500 * _0x1529f0 + 'px',
                _0x1f1bdc['style']['height'] = 0x2d0 * _0x1529f0 + 'px',
                $DEVICE['userAgentInfo']['vendorName'] !== 'LGE' && (_0x1f1bdc['width'] = 0x500 * _0x1529f0,
                _0x1f1bdc['height'] = 0x2d0 * _0x1529f0);
            }
        }),
        Object['defineProperty'](this, '_channelName', {
            'get': function() {
                return (this['_video']['currentChannel'] || {
                    'name': ''
                })['name']['noBOM']();
            }
        }),
        Object['defineProperty'](this, '_tracks', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_video']['getComponents'](this['_video']['COMPONENT_TYPE_AUDIO']);
            }
        }),
        Object['defineProperty'](this, '_subtitlesEnabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x117863 = document['querySelector']('object[type=\x22application/oipfConfiguration\x22]');
                return _0x117863['configuration']['subtitlesEnabled'];
            }
        }),
        Object['defineProperty'](this, '_preferredSubtitleLanguage', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x1ea030 = document['querySelector']('object[type=\x22application/oipfConfiguration\x22]');
                return _0x1ea030['configuration']['preferredSubtitleLanguage'];
            }
        }),
        Object['defineProperty'](this, '_subtitles', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x479585 = [];
                for (var _0x1edfaf = 0x0, _0x5f0433 = this['_video']['getComponents'](this['_video']['COMPONENT_TYPE_SUBTITLE']); _0x1edfaf < _0x5f0433['length']; _0x1edfaf++) {
                    for (var _0xa25776 = 0x0, _0xb7b49a = ![]; !_0xb7b49a && _0xa25776 < _0x479585['length']; _0xa25776++) {
                        _0xb7b49a = _0x479585[_0xa25776]['language'] === _0x5f0433[_0x1edfaf]['language'];
                    }
                    if (!_0xb7b49a)
                        _0x479585['push'](_0x5f0433[_0x1edfaf]);
                }
                ;return _0x479585;
            }
        });
        var _0x217215 = this['_subtitlesEnabled'];
        Object['defineProperty'](this, '_subtitleVisible', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x217215;
            },
            'set': function(_0x409ba3) {
                println('_subtitleVisible\x20<-\x20' + _0x409ba3);
                if (_0x409ba3 !== _0x217215) {
                    _0x217215 = _0x409ba3;
                    if (!_0x409ba3) {
                        var _0x31b07a = this['_video']['getCurrentActiveComponents'](0x2)[0x0];
                        this['_video']['unselectComponent'](_0x31b07a);
                        for (var _0x2f9932 = 0x0; _0x2f9932 < _0x256783['length']; _0x2f9932++)
                            _0x256783[_0x2f9932](0x2, _0x31b07a);
                    } else {
                        var _0x283cfa = this['_subtitles'];
                        for (var _0x2dec2e = 0x0; _0x2dec2e < _0x283cfa['length']; _0x2dec2e++) {
                            if (_0x283cfa[_0x2dec2e]['language'] === 'ITA') {
                                this['_video']['selectComponent'](_0x283cfa[_0x2dec2e]);
                                for (_0x2f9932 = 0x0; _0x2f9932 < _0x256783['length']; _0x2f9932++)
                                    _0x256783[_0x2f9932](0x2, _0x283cfa[_0x2dec2e]);
                                break;
                            }
                        }
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_currentTrack', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_video']['getCurrentActiveComponents'](this['_video']['COMPONENT_TYPE_AUDIO'])[0x0];
            }
        }),
        Object['defineProperty'](this, '_currentSubtitles', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_video']['getCurrentActiveComponents'](this['_video']['COMPONENT_TYPE_SUBTITLE'])[0x0];
            }
        }),
        this['addStreamEventListener'] = function(_0x18c217) {
            println('don\x27t\x20use\x20$VideoManager::addStreamEventListener\x20method', 'wrn');
        }
        ,
        this['addPlayStateChangeListener'] = function(_0xe0f7f) {
            return _0x323530['push'](_0xe0f7f),
            _0xe0f7f;
        }
        ,
        this['removePlayStateChangeListener'] = function(_0x526af2) {
            var _0x40111d = _0x323530['indexOf'](_0x526af2);
            _0x40111d !== -0x1 && _0x323530['splice'](_0x40111d, 0x1);
        }
        ,
        this['addChannelChangeSucceededListener'] = function(_0x5b2032) {
            return _0x3ed3c8['push'](_0x5b2032),
            _0x5b2032;
        }
        ,
        this['removeChannelChangeSucceededListener'] = function(_0x5b8715) {
            var _0x365e75 = _0x3ed3c8['indexOf'](_0x5b8715);
            _0x365e75 !== -0x1 && _0x3ed3c8['splice'](_0x365e75, 0x1);
        }
        ,
        this['addChannelChangeErrorListener'] = function(_0x40305f) {
            return _0xaee736['push'](_0x40305f),
            _0x40305f;
        }
        ,
        this['removeChannelChangeErrorListener'] = function(_0x157ecb) {
            var _0x1369fb = _0xaee736['indexOf'](_0x157ecb);
            _0x1369fb !== -0x1 && _0xaee736['splice'](_0x1369fb, 0x1);
        }
        ,
        this['addSelectedComponentChangeListener'] = function(_0xfe11a9) {
            return _0x256783['push'](_0xfe11a9),
            _0xfe11a9;
        }
        ,
        this['removeSelectedComponentChangeListener'] = function(_0x4b8761) {
            var _0x37d46e = _0x256783['indexOf'](_0x4b8761);
            _0x37d46e !== -0x1 && _0x256783['splice'](_0x37d46e, 0x1);
        }
        ,
        this['subtitleSwitch'] = function(_0x1572a5) {
            var _0x471f08 = document['querySelector']('object[type=\x22video/broadcast\x22]');
            if (_0x1572a5) {
                _0x471f08['selectComponent'](_0x1572a5),
                _0x217215 = !![];
                for (var _0x1d203f = 0x0; _0x1d203f < _0x256783['length']; _0x1d203f++)
                    _0x256783[_0x1d203f](0x2, _0x1572a5);
            } else {
                var _0x3b6fa9 = this['_subtitles']
                  , _0x1cbbf4 = this['_currentSubtitles'];
                if (_0x3b6fa9['length'] > 0x1 && _0x1cbbf4)
                    for (var _0xe1fbd9 = 0x0; _0xe1fbd9 < _0x3b6fa9['length']; _0xe1fbd9++) {
                        if (_0x3b6fa9[_0xe1fbd9]['language'] === _0x1cbbf4['language']) {
                            _0x471f08['selectComponent'](_0x3b6fa9[_0xe1fbd9 + 0x1 < _0x3b6fa9['length'] ? _0xe1fbd9 + 0x1 : 0x0]),
                            _0x217215 = !![];
                            for (var _0x3d7642 = 0x0; _0x3d7642 < _0x256783['length']; _0x3d7642++)
                                _0x256783[_0x3d7642](0x2, _0x3b6fa9[_0xe1fbd9 + 0x1 < _0x3b6fa9['length'] ? _0xe1fbd9 + 0x1 : 0x0]);
                            break;
                        }
                    }
            }
        }
        ,
        this['trackSwitch'] = function(_0x3c2eb5) {
            var _0x2a4eeb = document['querySelector']('object[type=\x22video/broadcast\x22]');
            if (_0x3c2eb5) {
                _0x2a4eeb['selectComponent'](_0x3c2eb5);
                for (var _0x3cf9b2 = 0x0; _0x3cf9b2 < _0x256783['length']; _0x3cf9b2++)
                    _0x256783[_0x3cf9b2](0x1, _0x3c2eb5);
            } else {
                var _0x3fcfa9 = this['_tracks']
                  , _0x5de414 = this['_currentTrack'];
                if (_0x3fcfa9['length'] > 0x1 && _0x5de414)
                    for (var _0x498224 = 0x0; _0x498224 < _0x3fcfa9['length']; _0x498224++) {
                        if (_0x3fcfa9[_0x498224]['language'] === _0x5de414['language'] && _0x3fcfa9[_0x498224]['pid'] === _0x5de414['pid']) {
                            var _0x50736d = (_0x498224 + 0x1) % _0x3fcfa9['length'];
                            _0x2a4eeb['selectComponent'](_0x3fcfa9[_0x50736d]);
                            for (var _0x4d12ce = 0x0; _0x4d12ce < _0x256783['length']; _0x4d12ce++)
                                _0x256783[_0x4d12ce](0x1, _0x3fcfa9[_0x50736d]);
                            return {
                                'track': _0x3fcfa9[_0x50736d],
                                'index': _0x50736d
                            };
                        }
                    }
            }
        }
        ,
        this['getTrackName'] = function(_0x42dc29) {
            if (!_0x42dc29 || !EPG || !this['_video']['currentChannel'])
                return '';
            if (_0x42dc29['track']['pid']) {
                var _0x50418d = this['_video']['currentChannel']['onid'] + '.' + this['_video']['currentChannel']['tsid'] + '.' + this['_video']['currentChannel']['sid'];
                for (var _0x1fea01 = 0x0; _0x1fea01 < EPG['tv']['length']; _0x1fea01++) {
                    if (EPG['tv'][_0x1fea01]['dvbTriplet'] === _0x50418d) {
                        if (EPG['tv'][_0x1fea01]['audioLabels'])
                            return EPG['tv'][_0x1fea01]['audioLabels']['split'](',')[_0x42dc29['index']];
                        break;
                    }
                }
            }
            return this['toDisplayLanguage'](_0x42dc29['track']['language']);
        }
        ,
        this['toDisplayLanguage'] = function(_0x16aa07) {
            switch ((_0x16aa07 || '')['toLowerCase']()) {
            case 'ita':
                return 'Italiano';
            case 'oth':
            case 'zz{':
                return 'Audiodescrizione';
            case 'eng':
            case 'fra':
            case 'deu':
            case 'esp':
                return 'Lingua\x20originale';
            default:
                return _0x16aa07;
            }
        }
        ;
        function _0x7aab42(_0x5deb64) {
            if (_0x5deb64 && _0x5deb64['onid'] && _0x5deb64['onid'] !== 0x0) {
                var _0x1729c3 = _0x5deb64['onid'] + '.' + _0x5deb64['tsid'] + '.' + _0x5deb64['sid']
                  , _0x579b0d = JSON['stringify']($ConfigManager['getInstance']()['_source']);
                return _0x579b0d['indexOf'](_0x1729c3) !== -0x1;
            } else
                return !![];
        }
        var _0x1e088c = ![];
        this['setUp'] = function() {
            println('[VIDEO\x20MANAGER]\x20set-up');
            if (typeof this['_video']['bindToCurrentChannel'] === 'function')
                try {
                    _0x1e088c = !![],
                    this['_video']['bindToCurrentChannel']();
                } catch (_0x59bb67) {}
            this['_video']['onChannelChangeError'] = function _0x4a912b(_0x811b25, _0xd1bc95) {
                try {
                    var _0x2e2bba;
                    switch (_0xd1bc95) {
                    case 0x0:
                        _0x2e2bba = 'channel\x20not\x20supported\x20by\x20tuner.';
                        break;
                    case 0x1:
                        _0x2e2bba = 'cannot\x20tune\x20to\x20given\x20transport\x20stream\x20(e.g.\x20no\x20signal)';
                        break;
                    case 0x2:
                        _0x2e2bba = 'tuner\x20locked\x20by\x20other\x20object.';
                        break;
                    case 0x3:
                        _0x2e2bba = 'parental\x20lock\x20on\x20channel.';
                        break;
                    case 0x4:
                        _0x2e2bba = 'encrypted\x20channel,\x20key/module\x20missing.';
                        break;
                    case 0x5:
                        _0x2e2bba = 'unknown\x20channel\x20(e.g.\x20can’t\x20resolve\x20DVB\x20or\x20ISDB\x20triplet).';
                        break;
                    case 0x6:
                        _0x2e2bba = 'channel\x20switch\x20interrupted\x20(e.g.\x20because\x20another\x20channel\x20switch\x20was\x20activated\x20before\x20the\x20previous\x20one\x20completed).';
                        break;
                    case 0x7:
                        _0x2e2bba = 'channel\x20cannot\x20be\x20changed,\x20because\x20it\x20is\x20currently\x20being\x20recorded.';
                        break;
                    case 0x8:
                        _0x2e2bba = 'cannot\x20resolve\x20URI\x20of\x20referenced\x20IP\x20channel.';
                        break;
                    case 0x9:
                        _0x2e2bba = 'insufficient\x20bandwidth.';
                        break;
                    case 0xa:
                        _0x2e2bba = 'channel\x20cannot\x20be\x20changed\x20by\x20nextChannel()/prevChannel()\x20methods\x20either\x20because\x20the\x20OITF\x20does\x20not\x20maintain\x20a\x20favourites\x20or\x20channel\x20list\x20or\x20because\x20the\x20video/broadcast\x20object\x20is\x20in\x20the\x20Unrealized\x20state.';
                        break;
                    case 0xb:
                        _0x2e2bba = 'insufficient\x20resources\x20are\x20available\x20to\x20present\x20the\x20given\x20channel\x20(e.g.\x20a\x20lack\x20of\x20available\x20codec\x20resources).';
                        break;
                    case 0xc:
                        _0x2e2bba = 'specified\x20channel\x20not\x20found\x20in\x20transport\x20stream.';
                        break;
                    case 0x64:
                        _0x2e2bba = 'unidentified\x20error.';
                        break;
                    default:
                        _0x2e2bba = 'UNKNOWN\x20ERROR\x20CODE\x20[' + _0xd1bc95 + ']';
                        break;
                    }
                    println('\x09Channel\x20Change\x20Error\x20for\x20channel\x20\x22' + _0x811b25['name'] + '\x22\x0aERROR\x20DESCRIPTION:\x0a' + _0x2e2bba, 'ERR');
                    if (!_0x7aab42(_0x811b25)) {
                        println('\x09Landing\x20check\x20failed=>\x20destroying\x20application!', 'ERR');
                        var _0x58da1c = document['getElementById']('appmgr')['getOwnerApplication'](document);
                        _0x58da1c['destroyApplication']();
                    } else
                        for (var _0x112e40 = 0x0; _0x112e40 < _0xaee736['length']; _0x112e40++)
                            _0xaee736[_0x112e40](_0x811b25);
                } catch (_0x29761f) {
                    var _0x34ef80 = _0x29761f['stack'] || _0x29761f['stacktrace'] || '\x09NO\x20STACKTRACE\x20AVAILABLE\x20:-/';
                    println(_0x29761f + '\x0a' + _0x34ef80, 'ERR');
                }
            }
            ,
            this['_video']['onPlayStateChange'] = function _0x3b4815(_0x5d745f, _0x2185ab) {
                try {
                    var _0x6f7ba7;
                    switch (_0x5d745f) {
                    case 0x0:
                        _0x6f7ba7 = 'UNREALIZED';
                        break;
                    case 0x1:
                        _0x6f7ba7 = 'CONNECTING';
                        break;
                    case 0x2:
                        _0x6f7ba7 = 'PRESENTING';
                        break;
                    case 0x3:
                        _0x6f7ba7 = 'STOPPED';
                        break;
                    default:
                        _0x6f7ba7 = 'UNKNOWN\x20[' + _0x5d745f + ']';
                        break;
                    }
                    var _0x19d625 = ['channel\x20not\x20supported\x20by\x20tuner.', 'cannot\x20tune\x20to\x20given\x20transport\x20stream\x20(e.g.\x20no\x20signal)', 'tuner\x20locked\x20by\x20other\x20object.', 'parental\x20lock\x20on\x20channel.', 'encrypted\x20channel,\x20key/module\x20missing.', 'unknown\x20channel\x20(e.g.\x20can’t\x20resolve\x20DVB\x20or\x20ISDB\x20triplet).', 'channel\x20switch\x20interrupted\x20(e.g.\x20because\x20another\x20channel\x20switch\x20was\x20activated\x20before\x20the\x20previous\x20one\x20completed).', 'channel\x20cannot\x20be\x20changed,\x20because\x20it\x20is\x20currently\x20being\x20recorded.', 'cannot\x20resolve\x20URI\x20of\x20referenced\x20IP\x20channel.', 'insufficient\x20bandwidth.', 'channel\x20cannot\x20be\x20changed\x20by\x20nextChannel()/prevChannel()\x20methods\x20either\x20because\x20the\x20OITF\x20does\x20not\x20maintain\x20a\x20favourites\x20or\x20channel\x20list\x20or\x20because\x20the\x20video/broadcast\x20object\x20is\x20in\x20the\x20Unrealized\x20state.', 'insufficient\x20resources\x20are\x20available\x20to\x20present\x20the\x20given\x20channel\x20(e.g.\x20a\x20lack\x20of\x20available\x20codec\x20resources).', 'specified\x20channel\x20not\x20found\x20in\x20transport\x20stream.', 'unidentified\x20error.'], _0x2cab7c;
                    if (!_0x2185ab)
                        _0x2cab7c = 'undefined';
                    else
                        _0x2cab7c = '\x20[' + _0x2185ab + '\x20-\x20' + (_0x2185ab <= 0xc ? _0x19d625[_0x2185ab] : _0x19d625[0xd]) + ']';
                    println('\x09playStateUpdate(' + _0x6f7ba7 + ',\x20' + _0x2cab7c + ')'),
                    _0x1e088c = ![];
                    for (var _0x6ab668 = 0x0; _0x6ab668 < _0x323530['length']; _0x6ab668++)
                        _0x323530[_0x6ab668](_0x5d745f, _0x2185ab);
                } catch (_0x4c7bbc) {
                    var _0x171fc7 = _0x4c7bbc['stack'] || _0x4c7bbc['stacktrace'] || '\x09NO\x20STACKTRACE\x20AVAILABLE\x20:-/';
                    println(_0x4c7bbc + '\x0a' + _0x171fc7, 'ERR');
                }
            }
            ,
            this['_video']['onChannelChangeSucceeded'] = function _0x5cd27a(_0x1cbbb1) {
                println('\x09channelChangeSucceeded(' + (_0x1cbbb1 && _0x1cbbb1['name'] + '\x20lcn:' + _0x1cbbb1['majorChannel'] + '\x20dvb://' + _0x1cbbb1['onid'] + '.' + _0x1cbbb1['tsid'] + '.' + _0x1cbbb1['sid']) + ')');
                if (!_0x7aab42(_0x1cbbb1)) {
                    println('\x09Landing\x20check\x20failed\x20=>\x20destroying\x20application!', 'ERR');
                    var _0x123763 = document['getElementById']('appmgr')['getOwnerApplication'](document);
                    _0x123763['destroyApplication']();
                } else {
                    for (var _0x3ac0db = 0x0; _0x3ac0db < _0x3ed3c8['length']; _0x3ac0db++)
                        _0x3ed3c8[_0x3ac0db](_0x1cbbb1);
                    !HBBTV_EMULATION && ($VideoStreamer['getInstance']()['_channel'] = null);
                }
            }
            ;
        }
        ,
        this['init'] = function() {
            println('[VIDEO\x20MANAGER]\x20init');
            var _0xdefaaf = document['getElementById']('video');
            _0xdefaaf && (_0xdefaaf['onChannelChangeError'] = null,
            _0xdefaaf['onPlayStateChange'] = null,
            _0xdefaaf['onChannelChangeSucceeded'] = null,
            document['body']['removeChild'](_0xdefaaf),
            _0xdefaaf = $MISC['html2Element']('<object\x20id=\x22video\x22\x20type=\x22video/broadcast\x22\x20style=\x22position:\x20absolute;\x20left:0px;\x20top:0px;\x20width:\x201280px;\x20height:\x20720px;\x22></object>'),
            document['body']['insertBefore'](_0xdefaaf, document['body']['firstChild'])),
            this['setUp']();
        }
        ,
        this['isBinding'] = function() {
            return _0x1e088c;
        }
        ,
        this['notifyVirtualChannelChange'] = function(_0x47655a) {
            for (var _0x8d107f = 0x0; _0x8d107f < _0x3ed3c8['length']; _0x8d107f++)
                _0x3ed3c8[_0x8d107f](_0x47655a);
        }
        ,
        this['notifyVirtualComponentChange'] = function(_0x1cad21, _0xcaf06a) {
            for (var _0x505652 = 0x0; _0x505652 < _0x256783['length']; _0x505652++)
                _0x256783[_0x505652](_0x1cad21, _0xcaf06a);
        }
        ,
        this['cloneChannel'] = function(_0x4bf9a1) {
            return _0x4bf9a1 = _0x4bf9a1 || this['_video']['currentChannel'] || $StreamingService['getChannel'](),
            {
                'name': _0x4bf9a1['name']['noBOM'](),
                'onid': _0x4bf9a1['onid'],
                'tsid': _0x4bf9a1['tsid'],
                'sid': _0x4bf9a1['sid'],
                'majorChannel': _0x4bf9a1['majorChannel']
            };
        }
        ,
        this['setUp']();
    }
    return {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x16f740()),
            this['instance'];
        }
    };
}()
  , $QuickConfManager = function() {
    function _0x4a75d0(_0x5aaa3a) {
        this['instanceReadyListener'] = [];
        if (_0x5aaa3a)
            this['instanceReadyListener']['push'](_0x5aaa3a);
        function _0x53e7b7() {
            println('🟢\x20QuickConfManager'),
            this['_ready'] = !![];
            for (var _0x41398d = 0x0; _0x41398d < this['instanceReadyListener']['length']; _0x41398d++) {
                this['instanceReadyListener'][_0x41398d]();
            }
        }
        var _0x16a2a6 = {};
        Object['defineProperty'](this, '_quickEPG', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x16a2a6;
            }
        }),
        Object['defineProperty'](this, '_ready', {
            'value': ![],
            'writable': !![]
        });
        function _0x251edd(_0x3ac01f, _0x42acd4) {
            _0x42acd4 = _0x42acd4 || {};
            for (var _0x4aab1a = Object['keys'](_0x3ac01f), _0x80721c = 0x0, _0x22a2d6; _0x80721c < _0x4aab1a['length']; _0x80721c++) {
                _0x22a2d6 = _0x3ac01f[_0x4aab1a[_0x80721c]];
                if (!Array['isArray'](_0x22a2d6))
                    _0x42acd4[_0x4aab1a[_0x80721c]] = _0x22a2d6;
            }
            return _0x42acd4;
        }
        function _0x10d0ae(_0x6de28d) {
            var _0x5bbc4e = document['querySelector']('object[type=\x22video/broadcast\x22]')['currentChannel']
              , _0x313efa = _0x5bbc4e['onid'] + '.' + _0x5bbc4e['tsid'] + '.' + _0x5bbc4e['sid'];
            $MISC['objScanner'](_0x6de28d['Configuration']['Editors']['Editor'], 'Editor', function(_0x4f8f77, _0x5aca44, _0x48eaff) {
                if (_0x4f8f77['Service'])
                    _0x4f8f77['Service']['forEach'](function(_0x59f3d6) {
                        if (_0x59f3d6['dvbTriplet'] === _0x313efa) {
                            _0x16a2a6 = _0x251edd(_0x48eaff),
                            _0x16a2a6['editorName'] = _0x16a2a6['name'],
                            delete _0x16a2a6['name'],
                            _0x251edd(_0x4f8f77, _0x16a2a6),
                            _0x251edd(_0x59f3d6, _0x16a2a6);
                            for (var _0x40e48c = 0x0; _0x40e48c < _0x48eaff['Services']['length']; _0x40e48c++) {
                                if (_0x48eaff['Services'][_0x40e48c]['delivery'] === '3') {
                                    _0x16a2a6['url'] = undefined,
                                    _0x16a2a6['urlRestart'] = undefined;
                                    for (var _0x42d24d = 0x0; _0x42d24d < _0x48eaff['Services'][_0x40e48c]['Service']['length'] && (!_0x16a2a6['url'] || !_0x16a2a6['urlRestart']); _0x42d24d++) {
                                        _0x48eaff['Services'][_0x40e48c]['Service'][_0x42d24d]['name']['toUpperCase']()['startsWith'](_0x16a2a6['name']['toUpperCase']()) && (_0x16a2a6['url'] = _0x48eaff['Services'][_0x40e48c]['Service'][_0x42d24d]['url']),
                                        _0x48eaff['Services'][_0x40e48c]['Service'][_0x42d24d]['name'] === _0x16a2a6['restartName'] && (_0x16a2a6['urlRestart'] = _0x48eaff['Services'][_0x40e48c]['Service'][_0x42d24d]['url']);
                                    }
                                    break;
                                }
                            }
                        }
                    });
                else {
                    if (_0x4f8f77['dvbTriplet'] || _0x4f8f77['delivery'])
                        return ![];
                }
            });
        }
        $Net['http']('resources/srvConfig.json')['get']({
            'resolve': function(_0x5da09c) {
                if (!_0x5da09c['errorFlag']) {
                    var _0x1c7f4c = $MISC['jsonParse'](_0x5da09c['text']);
                    _0x10d0ae(_0x1c7f4c),
                    _0x16a2a6['pictureBaseUrl'] = _0x1c7f4c['Configuration']['pictureBaseUrl'],
                    _0x53e7b7['bind'](this)();
                } else
                    println(_0x5da09c, 'err');
            }
            ['bind'](this),
            'reject': function(_0xa8cfc0) {
                println(_0xa8cfc0, 'err');
            }
        });
    }
    return _0x4a75d0['prototype']['constructor'] = _0x4a75d0,
    {
        'instance': undefined,
        'getInstance': function(_0x431027) {
            if (!this['instance'])
                this['instance'] = new _0x4a75d0(_0x431027);
            else {
                if (this['instance']['_ready']) {
                    if (_0x431027)
                        _0x431027();
                } else {
                    if (_0x431027)
                        this['instance']['instanceReadyListener']['push'](_0x431027);
                }
            }
            return this['instance'];
        }
    };
}()
  , $ConfigManager = function() {
    function _0x58affa(_0x18f89d) {
        this['instanceReadyListener'] = [];
        if (_0x18f89d)
            this['instanceReadyListener']['push'](_0x18f89d);
        function _0x3a8bc0() {
            println('🟢\x20ConfigManager'),
            this['_ready'] = !![];
            for (var _0x1b5bfc = 0x0; _0x1b5bfc < this['instanceReadyListener']['length']; _0x1b5bfc++) {
                this['instanceReadyListener'][_0x1b5bfc]();
            }
        }
        function _0x588821(_0x18b880, _0x5ccaa9) {
            _0x5ccaa9 = _0x5ccaa9 || {};
            for (var _0xba7951 = Object['keys'](_0x18b880), _0x48b261 = 0x0, _0x476f0d; _0x48b261 < _0xba7951['length']; _0x48b261++) {
                _0x476f0d = _0x18b880[_0xba7951[_0x48b261]];
                if (!Array['isArray'](_0x476f0d))
                    _0x5ccaa9[_0xba7951[_0x48b261]] = _0x476f0d;
            }
            return _0x5ccaa9;
        }
        function _0x3cc61c(_0x50fac3) {
            var _0x4e30a3 = {
                'tv': [],
                'radio': []
            };
            return $MISC['objScanner'](_0x50fac3['Configuration']['Editors']['Editor'], 'Editor', function(_0x377e28, _0x4b429e, _0x1511a7) {
                if (_0x377e28['delivery'] !== undefined) {
                    if (_0x377e28['delivery'] === '3')
                        for (var _0x5c5f63 = 0x0, _0x25e861, _0x4fbb93, _0x2319a4, _0x55aa3c, _0x30bc6; _0x5c5f63 < _0x377e28['Service']['length']; _0x5c5f63++) {
                            _0x25e861 = _0x588821(_0x1511a7),
                            _0x25e861['editorName'] = _0x25e861['name'],
                            delete _0x25e861['name'],
                            _0x588821(_0x377e28, _0x25e861),
                            _0x588821(_0x377e28['Service'][_0x5c5f63], _0x25e861),
                            _0x25e861['urlRestart'] = undefined;
                            if (_0x25e861['restart'] === 'true')
                                for (var _0x5d77e7 = 0x0; _0x5d77e7 < _0x377e28['Service']['length']; _0x5d77e7++) {
                                    _0x377e28['Service'][_0x5d77e7]['name'] === _0x1511a7['restartName'] && (_0x25e861['urlRestart'] = _0x377e28['Service'][_0x5d77e7]['url']);
                                }
                            _0x4e30a3[_0x1511a7['type']]['push'](_0x25e861),
                            _0x4fbb93 = _0x25e861['dvbTriplet']['split'](/\D+/gm),
                            _0x2319a4 = parseInt(_0x4fbb93[0x0]),
                            _0x55aa3c = parseInt(_0x4fbb93[0x1]),
                            _0x30bc6 = parseInt(_0x4fbb93[0x2]),
                            $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['addCh'](_0x25e861['name'], _0x2319a4, _0x55aa3c, _0x30bc6),
                            println((_0x1511a7['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x377e28['Service'][_0x5c5f63]['name'] + '\x20[' + _0x377e28['Service'][_0x5c5f63]['dvbTriplet'] + '\x20pos:\x20' + _0x1511a7['position'] + '\x20#:\x20' + _0x377e28['Service'][_0x5c5f63]['lcn'] + ']', 'inf');
                        }
                    return ![];
                }
            }),
            _0x4e30a3;
        }
        function _0x203f80(_0x44419e) {
            function _0x181542(_0x2b53b9) {
                var _0x5d101d = [];
                return $MISC['objScanner'](_0x2b53b9, 'Services', function(_0x1da3ed, _0xa27567, _0x2c85b0) {
                    if (_0x1da3ed['delivery'] === '3') {
                        for (var _0x21d981 = 0x0, _0x2c0eb8; _0x21d981 < _0x1da3ed['Service']['length']; _0x21d981++) {
                            _0x2c0eb8 = _0x588821(_0x2c85b0),
                            _0x2c0eb8['editorName'] = _0x2c0eb8['name'],
                            delete _0x2c0eb8['name'],
                            _0x588821(_0x1da3ed, _0x2c0eb8),
                            _0x588821(_0x1da3ed['Service'][_0x21d981], _0x2c0eb8),
                            _0x2c0eb8['urlRestart'] = _0x2c0eb8['url'],
                            _0x5d101d['push'](_0x2c0eb8);
                        }
                        return ![];
                    }
                }),
                _0x5d101d;
            }
            var _0x260b08 = []
              , _0x55a668 = []
              , _0x1d803a = []
              , _0x3e370a = []
              , _0x4e65f2 = []
              , _0x22c6cd = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList'];
            function _0x264e87(_0x133597) {
                var _0x39c8d4 = {
                    'check': ![],
                    'chObj': undefined,
                    'msg': undefined
                };
                if (_0x1d803a['indexOf'](_0x133597['name']) === -0x1) {
                    var _0x224557 = _0x133597['dvbTriplet']['split'](/\D+/gm)
                      , _0x4f9401 = parseInt(_0x224557[0x1]);
                    if (_0x55a668['indexOf'](_0x133597['lcn']) === -0x1) {
                        if (_0x260b08['indexOf'](_0x4f9401) !== -0x1 && _0x133597['hybrid'] !== 'true')
                            _0x55a668['push'](_0x133597['lcn']),
                            _0x1d803a['push'](_0x133597['name']),
                            _0x39c8d4['check'] = !![],
                            _0x39c8d4['msg'] = 'TS\x20already\x20checked';
                        else {
                            var _0x491e24 = parseInt(_0x224557[0x0])
                              , _0x4fa03c = parseInt(_0x224557[0x2]);
                            _0x39c8d4['chObj'] = _0x22c6cd['getChannelByTriplet'](_0x491e24, _0x4f9401, _0x4fa03c),
                            _0x39c8d4['chObj'] && _0x39c8d4['chObj']['name'] && (_0x260b08['push'](_0x4f9401),
                            _0x55a668['push'](_0x133597['lcn']),
                            _0x1d803a['push'](_0x133597['name']),
                            _0x39c8d4['check'] = !![]);
                        }
                    } else {
                        _0x39c8d4['msg'] = 'LCN\x20collision';
                        if (_0x3e370a['indexOf'](_0x133597['lcn']) === -0x1) {
                            var _0x5bd673 = _0x22c6cd[parseInt(_0x133597['lcn']) - 0x1];
                            if (_0x5bd673 && _0x5bd673['name']['toUpperCase']()['indexOf']('RAI') >= 0x0) {
                                _0x5bd673['name'] === _0x133597['name'] && (_0x39c8d4['msg'] += '\x20⭐️',
                                _0x3e370a['push'](_0x133597['lcn']),
                                _0x4e65f2['push'](_0x133597));
                                if (_0x4e65f2['length'] === 0x0)
                                    _0x4e65f2 = [{
                                        'name': _0x5bd673['name']
                                    }];
                            } else
                                _0x3e370a['push'](_0x133597['lcn']);
                        }
                    }
                } else {
                    function _0x5d0ba7() {
                        for (var _0x142ff6 = 0x0; _0x142ff6 < _0x4e65f2['length']; _0x142ff6++)
                            if (_0x4e65f2[_0x142ff6]['name'] === _0x133597['name']) {
                                var _0x1ea103 = _0x133597['dvbTriplet']['split']('.')
                                  , _0x1aa7da = parseInt(_0x1ea103[0x1]);
                                if (_0x260b08['indexOf'](_0x1aa7da) > -0x1)
                                    return !![];
                                else
                                    return !!_0x22c6cd['getChannelByTriplet'](parseInt(_0x1ea103[0x0]), _0x4f9401, parseInt(_0x1ea103[0x2]));
                            }
                        return ![];
                    }
                    _0x5d0ba7() ? (_0x39c8d4['check'] = !![],
                    _0x39c8d4['msg'] = 'Tunable\x20clone') : _0x39c8d4['msg'] = 'Service\x20already\x20set';
                }
                return _0x39c8d4;
            }
            var _0x3ab467 = {
                'tv': [],
                'radio': []
            };
            $MISC['objScanner'](_0x44419e['Configuration']['Editors']['Editor'], 'Editor', function(_0x45c700, _0x203ea6, _0xd2b29) {
                if (_0x45c700['delivery'] !== undefined) {
                    if (_0x45c700['delivery'] === '2') {
                        if (_0x45c700['Service']) {
                            for (var _0x4d58d6 = 0x0, _0x2b4d9e, _0x11d9ce = 0x0, _0x2f9be8; _0x4d58d6 < _0x45c700['Service']['length']; _0x4d58d6++) {
                                _0x2f9be8 = _0x264e87(_0x45c700['Service'][_0x4d58d6]);
                                if (_0x2f9be8['check'])
                                    println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x45c700['Service'][_0x4d58d6]['name'] + (_0x45c700['Service'][_0x4d58d6]['visible'] === 'false' ? '\x20👻' : '') + (_0x45c700['Service'][_0x4d58d6]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x45c700['Service'][_0x4d58d6]['dvbTriplet'] + '\x20pos:\x20' + _0xd2b29['position'] + '\x20#:\x20' + _0x45c700['Service'][_0x4d58d6]['lcn'] + ']' + (_0x2f9be8['msg'] ? '\x20-\x20' + _0x2f9be8['msg'] : ''), 'inf');
                                else {
                                    if (_0x2f9be8['msg'] && _0x2f9be8['msg']['indexOf']('⭐️') >= 0x0)
                                        println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x45c700['Service'][_0x4d58d6]['name'] + (_0x45c700['Service'][_0x4d58d6]['visible'] === 'false' ? '\x20👻' : '') + (_0x45c700['Service'][_0x4d58d6]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x45c700['Service'][_0x4d58d6]['dvbTriplet'] + '\x20pos:\x20' + _0xd2b29['position'] + '\x20#:\x20' + _0x45c700['Service'][_0x4d58d6]['lcn'] + ']' + (_0x2f9be8['msg'] ? '\x20-\x20' + _0x2f9be8['msg'] : ''), 'fne');
                                    else
                                        println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x45c700['Service'][_0x4d58d6]['name'] + (_0x45c700['Service'][_0x4d58d6]['visible'] === 'false' ? '\x20👻' : '') + (_0x45c700['Service'][_0x4d58d6]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x45c700['Service'][_0x4d58d6]['dvbTriplet'] + '\x20pos:\x20' + _0xd2b29['position'] + '\x20#:\x20' + _0x45c700['Service'][_0x4d58d6]['lcn'] + ']' + (_0x2f9be8['msg'] ? '\x20-\x20' + _0x2f9be8['msg'] : ''), 'err');
                                }
                                if (_0x2f9be8['check']) {
                                    _0x2b4d9e = _0x588821(_0xd2b29),
                                    _0x2b4d9e['editorName'] = _0x2b4d9e['name'],
                                    delete _0x2b4d9e['name'],
                                    _0x588821(_0x45c700, _0x2b4d9e),
                                    _0x588821(_0x45c700['Service'][_0x4d58d6], _0x2b4d9e);
                                    for (var _0x49001a = 0x0; _0x49001a < _0xd2b29['Services']['length']; _0x49001a++) {
                                        if (_0xd2b29['Services'][_0x49001a]['delivery'] === '3') {
                                            _0x2b4d9e['url'] = undefined,
                                            _0x2b4d9e['urlRestart'] = undefined;
                                            for (var _0x131796 = 0x0; _0x131796 < _0xd2b29['Services'][_0x49001a]['Service']['length'] && (!_0x2b4d9e['url'] || !_0x2b4d9e['urlRestart']); _0x131796++) {
                                                _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['name']['toUpperCase']()['startsWith'](_0x2b4d9e['name']['toUpperCase']()) && (_0x2b4d9e['url'] = _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['url']),
                                                _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['name'] === _0x2b4d9e['restartName'] && (_0x2b4d9e['urlRestart'] = _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['url']);
                                            }
                                            break;
                                        }
                                    }
                                    _0x3ab467[_0xd2b29['type']]['push'](_0x2b4d9e),
                                    _0x11d9ce++;
                                }
                                if (_0x2f9be8['msg'] === 'LCN\x20collision\x20⭐️') {
                                    var _0x2a0f6e, _0x4037fc;
                                    _0x4037fc = _0x3ab467[_0xd2b29['type']]['find'](function(_0x2225fc, _0x2b22ae) {
                                        if (_0x2225fc['lcn'] === _0x45c700['Service'][_0x4d58d6]['lcn'])
                                            return _0x2a0f6e = _0x2b22ae,
                                            !![];
                                        else
                                            return ![];
                                    }),
                                    _0x1d803a['splice'](_0x1d803a['indexOf'](_0x4037fc['name']), 0x1),
                                    _0x1d803a['push'](_0x45c700['Service'][_0x4d58d6]['name']),
                                    _0x2b4d9e = _0x588821(_0xd2b29),
                                    _0x2b4d9e['editorName'] = _0x2b4d9e['name'],
                                    delete _0x2b4d9e['name'],
                                    _0x588821(_0x45c700, _0x2b4d9e),
                                    _0x588821(_0x45c700['Service'][_0x4d58d6], _0x2b4d9e);
                                    for (var _0x49001a = 0x0; _0x49001a < _0xd2b29['Services']['length']; _0x49001a++) {
                                        if (_0xd2b29['Services'][_0x49001a]['delivery'] === '3') {
                                            _0x2b4d9e['url'] = undefined,
                                            _0x2b4d9e['urlRestart'] = undefined;
                                            for (var _0x131796 = 0x0; _0x131796 < _0xd2b29['Services'][_0x49001a]['Service']['length'] && (!_0x2b4d9e['url'] || !_0x2b4d9e['urlRestart']); _0x131796++) {
                                                _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['name']['toUpperCase']()['startsWith'](_0x2b4d9e['name']['toUpperCase']()) && (_0x2b4d9e['url'] = _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['url']),
                                                _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['name'] === _0x2b4d9e['restartName'] && (_0x2b4d9e['urlRestart'] = _0xd2b29['Services'][_0x49001a]['Service'][_0x131796]['url']);
                                            }
                                            break;
                                        }
                                    }
                                    _0x3ab467[_0xd2b29['type']][_0x2a0f6e] = _0x2b4d9e;
                                }
                                if (_0x2f9be8['msg'] === 'LCN\x20collision\x20-\x20terminalChannel\x20mismatch\x20🚫') {
                                    var _0x2a0f6e, _0x4037fc;
                                    _0x4037fc = _0x3ab467[_0xd2b29['type']]['find'](function(_0x3b290f, _0x29d55a) {
                                        if (_0x3b290f['lcn'] === _0x45c700['Service'][_0x4d58d6]['lcn'])
                                            return _0x2a0f6e = _0x29d55a,
                                            !![];
                                        else
                                            return ![];
                                    }),
                                    _0x1d803a['splice'](_0x1d803a['indexOf'](_0x4037fc['name']), 0x1),
                                    _0x3ab467[_0xd2b29['type']]['splice'](_0x2a0f6e, 0x1);
                                }
                            }
                            if (_0x11d9ce === 0x0) {
                                var _0x564cf5 = _0x181542(_0xd2b29);
                                _0x564cf5['length'] > 0x0 ? (println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'No\x20DELIVERY\x20type\x202\x20services\x20tunable\x20for\x20' + _0xd2b29['name'] + '.\x20Using\x20Network\x20replacement\x20(' + _0x564cf5['length'] + '\x20services)', 'wrn'),
                                _0x3ab467[_0xd2b29['type']] = _0x3ab467[_0xd2b29['type']]['concat'](_0x564cf5)) : println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'Neither\x20DELIVERY\x20type\x202\x20services\x20tunable\x20nor\x20DELIVERY\x20type\x203\x20services\x20available\x20for\x20' + _0xd2b29['name'], 'err');
                            }
                        } else {
                            var _0x564cf5 = _0x181542(_0xd2b29);
                            _0x564cf5['length'] > 0x0 ? (println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'No\x20DELIVERY\x20type\x202\x20available\x20for\x20' + _0xd2b29['name'] + '.\x20Using\x20Network\x20replacement\x20(' + _0x564cf5['length'] + '\x20services)', 'wrn'),
                            _0x3ab467[_0xd2b29['type']] = _0x3ab467[_0xd2b29['type']]['concat'](_0x564cf5)) : println((_0xd2b29['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'Neither\x20DELIVERY\x20type\x202\x20nor\x20DELIVERY\x20type\x203\x20is\x20available\x20for\x20' + _0xd2b29['name'], 'err');
                        }
                    }
                    return ![];
                }
            });
            for (var _0x2cad6a = 0x0; _0x2cad6a < _0x3ab467['tv']['length']; _0x2cad6a++) {
                var _0x36639f = parseInt(_0x3ab467['tv'][_0x2cad6a]);
                if (_0x36639f === 0x3) {
                    var _0x149804 = _0x3ab467['tv'][_0x2cad6a]['split']('.')
                      , _0x21ecd9 = _0x22c6cd['getChannelByTriplet'](parseInt(_0x149804[0x0]), parseInt(_0x149804[0x1]), parseInt(_0x149804[0x3]));
                    _0x21ecd9 && _0x21ecd9['terminalChannel'] - _0x36639f !== 0x0 && println('There\x20could\x20be\x20a\x20problem\x20in\x20the\x20channel\x20list', 'err');
                    break;
                }
            }
            return _0x3ab467;
        }
        function _0x11cff1(_0x5ec756) {
            var _0x5028f9 = {
                'tv': [],
                'radio': []
            };
            return $MISC['objScanner'](_0x5ec756['Configuration']['Editors']['Editor'], 'Editor', function(_0x5eaaf3, _0x3e5384, _0x418bf9) {
                if (_0x5eaaf3['delivery'] !== undefined) {
                    if (_0x5eaaf3['delivery'] === '0' && _0x5eaaf3['Service'] || _0x418bf9['name'] === 'Rai\x20Radio\x202\x20Visual\x20Radio' && _0x5eaaf3['delivery'] === '3')
                        for (var _0x495f5f = 0x0, _0xff79a7; _0x495f5f < _0x5eaaf3['Service']['length']; _0x495f5f++) {
                            _0xff79a7 = _0x588821(_0x418bf9),
                            _0xff79a7['editorName'] = _0xff79a7['name'],
                            delete _0xff79a7['name'],
                            _0x588821(_0x5eaaf3, _0xff79a7),
                            _0x588821(_0x5eaaf3['Service'][_0x495f5f], _0xff79a7);
                            for (var _0x25fa0c = 0x0; _0x25fa0c < _0x418bf9['Services']['length']; _0x25fa0c++) {
                                if (_0x418bf9['Services'][_0x25fa0c]['delivery'] === '3') {
                                    _0xff79a7['url'] = undefined,
                                    _0xff79a7['urlRestart'] = undefined;
                                    for (var _0x2352b = 0x0; _0x2352b < _0x418bf9['Services'][_0x25fa0c]['Service']['length'] && (!_0xff79a7['url'] || !_0xff79a7['urlRestart']); _0x2352b++) {
                                        _0x418bf9['Services'][_0x25fa0c]['Service'][_0x2352b]['name']['toUpperCase']()['startsWith'](_0xff79a7['name']['toUpperCase']()) && (_0xff79a7['url'] = _0x418bf9['Services'][_0x25fa0c]['Service'][_0x2352b]['url']),
                                        _0x418bf9['Services'][_0x25fa0c]['Service'][_0x2352b]['name'] === _0xff79a7['restartName'] && (_0xff79a7['urlRestart'] = _0x418bf9['Services'][_0x25fa0c]['Service'][_0x2352b]['url']);
                                    }
                                    break;
                                }
                            }
                            _0x5028f9[_0x418bf9['type']]['push'](_0xff79a7),
                            println((_0x418bf9['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x5eaaf3['Service'][_0x495f5f]['name'] + (_0x5eaaf3['Service'][_0x495f5f]['visible'] === 'false' ? '\x20👻' : '') + (_0x5eaaf3['Service'][_0x495f5f]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x5eaaf3['Service'][_0x495f5f]['dvbTriplet'] + '\x20pos:\x20' + _0x418bf9['position'] + '\x20#:\x20' + _0x5eaaf3['Service'][_0x495f5f]['lcn'] + ']', 'inf');
                        }
                    return ![];
                }
            }),
            _0x5028f9;
        }
        Object['defineProperty'](this, '_ready', {
            'value': ![],
            'writable': !![]
        });
        var _0x1d0a5d = undefined;
        Object['defineProperty'](this, '_source', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1d0a5d;
            }
        }),
        $Net['http']('resources/srvConfig.json')['get']({
            'resolve': function(_0x43e66a) {
                if (!_0x43e66a['errorFlag']) {
                    _0x1d0a5d = $MISC['jsonParse'](_0x43e66a['text']),
                    println('[ConfigManager]\x20fetched\x20config\x20' + _0x1d0a5d['Configuration']['dateTime']);
                    switch (DELIVERY_FLAG) {
                    case 0x0:
                        EPG = _0x11cff1(_0x1d0a5d);
                        break;
                    case 0x2:
                        EPG = _0x203f80(_0x1d0a5d);
                        break;
                    case 0x3:
                        EPG = _0x3cc61c(_0x1d0a5d);
                        break;
                    }
                    EPG['pictureBaseUrl'] = _0x1d0a5d['Configuration']['pictureBaseUrl'];
                    function _0x2e35a2(_0x51ee44, _0x43b418) {
                        return _0x51ee44['position'] !== _0x43b418['position'] ? _0x51ee44['position'] - _0x43b418['position'] : _0x51ee44['lcn'] - _0x43b418['lcn'];
                    }
                    EPG['tv']['sort'](_0x2e35a2),
                    EPG['radio']['sort'](_0x2e35a2),
                    _0x3a8bc0['bind'](this)();
                } else
                    println(_0x43e66a, 'err');
            }
            ['bind'](this),
            'reject': function(_0x2eb0d9) {
                println(_0x2eb0d9, 'err');
            }
        });
    }
    return _0x58affa['prototype']['constructor'] = _0x58affa,
    {
        'instance': undefined,
        'getInstance': function(_0x5875db) {
            if (!this['instance'])
                this['instance'] = new _0x58affa(_0x5875db);
            else {
                if (this['instance']['_ready']) {
                    if (_0x5875db)
                        _0x5875db();
                } else {
                    if (_0x5875db)
                        this['instance']['instanceReadyListener']['push'](_0x5875db);
                }
            }
            return this['instance'];
        }
    };
}()
  , $PendingTaskSentry = function() {
    var _0x43d779 = 0x0
      , _0xa210a = {};
    function _0x3293e6() {
        var _0x92b234 = undefined
          , _0x572d0d = undefined
          , _0x971cc8 = []
          , _0x268d16 = Date['now']();
        for (var _0x1abab5 = 0x0; _0x1abab5 < arguments['length']; _0x1abab5++) {
            switch (typeof arguments[_0x1abab5]) {
            case 'number':
                _0x572d0d = arguments[_0x1abab5];
                break;
            case 'string':
                _0x92b234 = arguments[_0x1abab5];
                break;
            default:
                _0x971cc8 = arguments[_0x1abab5];
                break;
            }
        }
        var _0x1c39eb = function() {
            this['_pendingCount'] > 0x0 ? _0xa210a[this['_name']] = this : delete _0xa210a[this['_name']];
        }
        ['bind'](this)
          , _0x57c9db = _0x92b234 || 'PendingTaskSentry_' + _0x43d779;
        Object['defineProperty'](this, '_name', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x57c9db;
            }
        }),
        Object['defineProperty'](this, '_callbackArr', {
            'value': _0x971cc8,
            'writable': !![]
        });
        var _0x1952bc = _0x572d0d;
        Object['defineProperty'](this, '_pendingCount', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1952bc;
            },
            'set': function(_0x1a2536) {
                _0x1952bc = _0x1a2536;
                if (!_0x1952bc)
                    for (var _0x1de691 = 0x0; _0x1de691 < this['_callbackArr']['length']; _0x1de691++)
                        this['_callbackArr'][_0x1de691]();
                _0x1c39eb();
            }
        }),
        this['accomplishedTask'] = function() {
            var _0x5a78d7 = '⏱\x20' + (Date['now']() - _0x268d16) + '\x20ms.\x20/\x20' + (this['_pendingCount'] - 0x1 === 0x0 ? '🏁' : this['_pendingCount'] - 0x1 + '\x20remaining...');
            _0x5a78d7 = (arguments[0x0] ? arguments[0x0] : this['_name']) + '\x20' + _0x5a78d7,
            println(_0x5a78d7),
            this['_pendingCount']--;
        }
        ['bind'](this),
        _0x43d779++,
        _0x1c39eb();
    }
    return _0x3293e6['prototype']['constructor'] = _0x3293e6,
    _0x3293e6['getByName'] = function(_0x12649e) {
        return _0xa210a[_0x12649e];
    }
    ,
    _0x3293e6;
}()
  , $StreamEventManager = function() {
    var _0x3bdd88 = 0x0, _0x27fe28 = 0x1, _0x358aec = 0x2, _0x268a8f = 0x3, _0x565b85 = 0x4, _0x1b30ee = 0x5, _0x45def9 = 0x64, _0x4ba780, _0x1ae758, _0x8d5ffa = 0x0, _0x11317b;
    function _0x4a6b97(_0x3f6284, _0x284c8e) {
        _0x8d5ffa && (clearTimeout(_0x8d5ffa),
        _0x8d5ffa = 0x0);
        if (_0x4ba780 && _0x4ba780['payload']) {
            if (_0x3f6284 === 0x3 || _0x3f6284 === 0x1 && !!_0x284c8e)
                _0x3b7bd2(),
                _0x4ba780['lost'] = !![],
                _0x4ba780['onRequest'](_0x27fe28, 'lost');
            else
                _0x3f6284 === 0x2 && (_0x4ba780 && _0x4ba780['lost'] && (delete _0x4ba780['lost'],
                _0x8d5ffa = setTimeout(function() {
                    _0x8d5ffa = 0x0;
                    if (!_0x4ba780 || !_0x4ba780['payload'])
                        return;
                    _0x16254a(_0x4ba780['payload']['url'], _0x4ba780['payload']['name']),
                    _0x4ba780['onRequest'](_0x3bdd88, 'ok');
                }, 0xbb8)));
        }
    }
    function _0x217d5e(_0x59628c) {
        if (!_0x59628c) {
            println('[STREAM-EVENT\x20MANAGER]\x20received\x20invalid\x20stream\x20event', 'wrn');
            return;
        }
        var _0x13d275 = !!_0x11317b && _0x11317b['name'] === _0x59628c['name'] && _0x11317b['data'] === _0x59628c['data'] && _0x11317b['text'] === _0x59628c['text'] && _0x11317b['status'] === _0x59628c['status'];
        _0x11317b = {
            'name': _0x59628c['name'],
            'data': _0x59628c['data'],
            'text': _0x59628c['text'],
            'status': _0x59628c['status']
        };
        if (_0x13d275)
            return;
        if (_0x4ba780)
            _0x4ba780['onRequest'](_0x1b30ee, _0x59628c);
    }
    function _0x5933ba(_0x1dd9e1, _0x4353c0, _0x446762) {
        $Net['http'](_0x1dd9e1)['get']({
            'resolve': function(_0x13b204) {
                if (_0x13b204['errorFlag'])
                    return _0x446762({
                        'ok': ![],
                        'name': _0x4353c0,
                        'reason': 'http\x20error\x20[' + _0x13b204['code'] + ']'
                    });
                var _0x543896 = new DOMParser()
                  , _0x563155 = _0x543896['parseFromString'](_0x13b204['text'], 'text/xml')
                  , _0x145b94 = _0x563155['querySelector']('parsererror');
                if (_0x145b94)
                    _0x446762({
                        'ok': ![],
                        'name': _0x4353c0,
                        'reason': 'error\x20while\x20parsing'
                    });
                else {
                    var _0x2ab280 = _0x563155['getElementsByTagName']('stream_event');
                    for (var _0x20e4a1 = 0x0; _0x20e4a1 < _0x2ab280['length']; _0x20e4a1++) {
                        if (_0x2ab280[_0x20e4a1] && _0x2ab280[_0x20e4a1]['getAttribute']('stream_event_name') === _0x4353c0)
                            return _0x446762({
                                'ok': !![],
                                'name': _0x4353c0,
                                'cTag': _0x2ab280[_0x20e4a1]['parentNode']['getAttribute']('component_tag')
                            });
                    }
                    _0x446762({
                        'ok': ![],
                        'name': _0x4353c0,
                        'reason': 'event\x20not\x20found'
                    });
                }
            },
            'reject': function() {
                _0x446762({
                    'ok': ![],
                    'name': _0x4353c0,
                    'reason': 'http\x20error'
                });
            }
        });
    }
    function _0x16254a(_0x18a0cf, _0x81eb3) {
        _0x4ba780['payload'] = {
            'url': _0x18a0cf,
            'name': _0x81eb3
        },
        println('[STREAM-EVENT\x20MANAGER]\x20ADD\x20' + _0x4ba780['payload']['url'] + '\x20|\x20' + _0x4ba780['payload']['name']),
        _0x5933ba(_0x18a0cf, _0x81eb3, function(_0x31c1f2) {
            println('[STREAM-EVENT\x20MANAGER]\x20' + _0x31c1f2['name'] + ',\x20check:\x20' + (_0x31c1f2['ok'] ? 'SUCCESS\x20(comp.tag=' + _0x31c1f2['cTag'] + ')' : 'FAILED\x20-\x20' + _0x31c1f2['reason']));
            if (_0x31c1f2['ok']) {
                var _0x48857c = document['getElementById']('video');
                if (_0x48857c['addStreamEventListener'])
                    _0x48857c['addStreamEventListener'](_0x4ba780['payload']['url'], _0x4ba780['payload']['name'], _0x217d5e);
            } else
                _0x4ba780['onRequest'](_0x1b30ee, {
                    'status': 'error',
                    'name': _0x81eb3
                });
        });
    }
    function _0x3b7bd2() {
        println('[STREAM-EVENT\x20MANAGER]\x20REMOVE\x20' + _0x4ba780['payload']['url'] + '\x20|\x20' + _0x4ba780['payload']['name']);
        var _0x414abf = document['getElementById']('video');
        _0x414abf['removeStreamEventListener'] && _0x414abf['removeStreamEventListener'](_0x4ba780['payload']['url'], _0x4ba780['payload']['name'], _0x217d5e);
    }
    function _0x2f6752() {
        return Math['floor'](0x3b9aca00 + Math['random']() * 0x218711a00)['toString'](0x10) + Date['now']()['toString'](0x10);
    }
    function _0x23da3d(_0x2c6732) {
        if (_0x1ae758)
            for (var _0x11e4cd = 0x0; _0x11e4cd < _0x1ae758['length']; _0x11e4cd++) {
                if (_0x1ae758[_0x11e4cd]['serviceId'] === _0x2c6732)
                    return {
                        'item': _0x1ae758[_0x11e4cd],
                        'index': _0x11e4cd
                    };
            }
    }
    function _0x2ffc4e(_0x227ec3, _0x4fd819) {
        var _0x3f1e48 = _0x2f6752();
        return !_0x1ae758 && (_0x1ae758 = [],
        $VideoManager['getInstance']()['addPlayStateChangeListener'](_0x4a6b97)),
        _0x1ae758['push']({
            'priority': _0x227ec3,
            'serviceId': _0x3f1e48,
            'onRequest': _0x4fd819
        }),
        _0x1ae758['length'] > 0x1 && _0x1ae758['sort'](function(_0xdc4cfe, _0x1384d8) {
            if (_0xdc4cfe['priority'] > _0x1384d8['priority'])
                return 0x1;
            if (_0xdc4cfe['priority'] < _0x1384d8['priority'])
                return -0x1;
            return 0x0;
        }),
        _0x3f1e48;
    }
    function _0x73a48b(_0x4f9742, _0x22a806, _0x282a6b) {
        var _0x53c78d = _0x23da3d(_0x4f9742);
        if (!_0x53c78d)
            return {
                'code': _0x45def9,
                'text': 'service\x20not\x20found\x20in\x20the\x20service\x20list:\x20' + _0x4f9742
            };
        _0x53c78d = _0x53c78d['item'];
        if (!_0x4ba780)
            return _0x4ba780 = _0x53c78d,
            _0x16254a(_0x22a806, _0x282a6b),
            {
                'code': _0x3bdd88,
                'text': 'ok'
            };
        else {
            if (_0x4ba780['serviceId'] === _0x4f9742)
                return _0x3b7bd2(),
                _0x16254a(_0x22a806, _0x282a6b),
                {
                    'code': _0x565b85,
                    'text': 'resource\x20updated'
                };
            if (_0x4ba780['priority'] >= _0x53c78d['priority'])
                return _0x53c78d['payload'] = {
                    'url': _0x22a806,
                    'name': _0x282a6b
                },
                {
                    'code': _0x268a8f,
                    'text': 'current\x20service\x20has\x20higher\x20priority:\x20' + _0x53c78d['priority']
                };
            return _0x3b7bd2(),
            _0x4ba780['onRequest'](_0x27fe28, 'lost'),
            _0x4ba780 = _0x53c78d,
            _0x16254a(_0x22a806, _0x282a6b),
            {
                'code': _0x3bdd88,
                'text': 'ok'
            };
        }
    }
    function _0x3143a7(_0x39ac02) {
        var _0x105ef3 = _0x23da3d(_0x39ac02);
        if (!_0x105ef3)
            return {
                'code': _0x45def9,
                'text': 'service\x20not\x20found\x20in\x20the\x20service\x20list:\x20' + _0x39ac02
            };
        if (!_0x4ba780 || _0x4ba780['serviceId'] !== _0x39ac02) {
            if (_0x105ef3['item']['payload'])
                return delete _0x105ef3['item']['payload'],
                {
                    'code': _0x358aec,
                    'text': 'released'
                };
            return {
                'code': _0x45def9,
                'text': 'forbidden\x20request'
            };
        }
        _0x3b7bd2(),
        _0x4ba780 = null,
        delete _0x105ef3['item']['payload'],
        _0x105ef3['item']['onRequest'](_0x358aec, 'released');
        while (_0x105ef3['index'] > 0x0) {
            _0x105ef3['index'] -= 0x1;
            if (_0x1ae758[_0x105ef3['index']]['payload']) {
                _0x4ba780 = _0x1ae758[_0x105ef3['index']],
                _0x4ba780['onRequest'](_0x3bdd88, 'ok'),
                _0x16254a(_0x4ba780['payload']['url'], _0x4ba780['payload']['name']);
                break;
            }
        }
    }
    return {
        'version': 0x4,
        'RESOURCE_ADQUIRED': _0x3bdd88,
        'RESOURCE_LOST': _0x27fe28,
        'RESOURCE_RELEASED': _0x358aec,
        'RESOURCE_BUSY': _0x268a8f,
        'RESOURCE_UPDATED': _0x565b85,
        'RESOURCE_DATA': _0x1b30ee,
        'REQUEST_ERROR': _0x45def9,
        'sign': _0x2ffc4e,
        'request': _0x73a48b,
        'release': _0x3143a7
    };
}()
  , $Widget = function() {
    var _0x32150b = 0x0;
    function _0x4243a2(_0x329846) {
        var _0x1732f2;
        !_0x329846 ? _0x1732f2 = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute\x27></div>') : (_0x1732f2 = _0x329846['constructor'] === String || _0x329846['constructor'] === Text ? $MISC['html2Element'](_0x329846) : _0x329846,
        _0x1732f2['style']['position'] = 'absolute');
        _0x1732f2['style']['webkitBackfaceVisibility'] = 'hidden',
        _0x1732f2['style']['willChange'] = 'transform';
        var _0x3cd19f = this['constructor']['toString']();
        _0x3cd19f = _0x3cd19f['replace']('function', '')['trim'](),
        _0x3cd19f = _0x3cd19f['substring'](0x0, _0x3cd19f['indexOf']('('));
        if (_0x3cd19f['length'] === 0x0)
            _0x3cd19f = 'Widget';
        _0x1732f2['setAttribute']('widget-class', _0x3cd19f),
        Object['defineProperty'](this, '_node', {
            'value': _0x1732f2,
            'writable': ![]
        }),
        Object['defineProperty'](this, '_uniqueID', {
            'value': _0x32150b++,
            'writable': ![]
        }),
        Object['defineProperty'](this, '_parent', {
            'value': null,
            'writable': !![]
        }),
        Object['defineProperty'](this, '_children', {
            'value': [],
            'writable': !![]
        }),
        Object['defineProperty'](this, '_keyListener', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return $DEVICE['keyManager']['getListener'](this);
            },
            'set': function(_0x3c0dab) {
                if (_0x3c0dab)
                    $DEVICE['keyManager']['setListener']({
                        'widget': this,
                        'handler': _0x3c0dab
                    });
                else
                    $DEVICE['keyManager']['clearListener'](this);
            }
        });
        var _0x3ba1e6 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3ba1e6;
            },
            'set': function(_0x1893e4) {
                _0x3ba1e6 = _0x1893e4;
            }
        }),
        Object['defineProperty'](this, '_left', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x1bd38b = parseFloat(this['_node']['style']['left']['replace'](',', '.'));
                return isNaN(_0x1bd38b) ? this['_node']['getBoundingClientRect']()['left'] : _0x1bd38b;
            },
            'set': function(_0x2f0995) {
                this['_node']['style']['left'] = _0x2f0995 + 'px';
            }
        }),
        Object['defineProperty'](this, '_top', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x3cf72c = parseFloat(this['_node']['style']['top']['replace'](',', '.'));
                return isNaN(_0x3cf72c) ? this['_node']['getBoundingClientRect']()['top'] : _0x3cf72c;
            },
            'set': function(_0x175d84) {
                this['_node']['style']['top'] = _0x175d84 + 'px';
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x40b72c = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x40b72c) ? this['_node']['getBoundingClientRect']()['width'] : _0x40b72c;
            },
            'set': function(_0x2f6de1) {
                this['_node']['style']['width'] = _0x2f6de1 + 'px';
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x26a7c7 = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x26a7c7) ? this['_node']['getBoundingClientRect']()['height'] : _0x26a7c7;
            },
            'set': function(_0x3eedc8) {
                this['_node']['style']['height'] = _0x3eedc8 + 'px';
            }
        }),
        Object['defineProperty'](this, '_bounds', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x441ce2 = parseFloat(this['_node']['style']['left']['replace'](',', '.'))
                  , _0x551923 = parseFloat(this['_node']['style']['top']['replace'](',', '.'))
                  , _0x5f481b = parseFloat(this['_node']['style']['width']['replace'](',', '.'))
                  , _0x217376 = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return {
                    'left': isNaN(_0x441ce2) ? this['_node']['getBoundingClientRect']()['left'] : _0x441ce2,
                    'top': isNaN(_0x551923) ? this['_node']['getBoundingClientRect']()['top'] : _0x551923,
                    'width': isNaN(_0x5f481b) ? this['_node']['getBoundingClientRect']()['width'] : _0x5f481b,
                    'height': isNaN(_0x217376) ? this['_node']['getBoundingClientRect']()['height'] : _0x217376
                };
            },
            'set': function(_0x4c8af3) {
                this['_left'] = _0x4c8af3['left'],
                this['_top'] = _0x4c8af3['top'],
                this['_width'] = _0x4c8af3['width'],
                this['_height'] = _0x4c8af3['height'];
            }
        }),
        Object['defineProperty'](this, '_background', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1732f2['style']['background'];
            },
            'set': function(_0x1688d2) {
                _0x1732f2['style']['background'] = _0x1688d2;
            }
        }),
        Object['defineProperty'](this, '_color', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1732f2['style']['color'];
            },
            'set': function(_0x32a88e) {
                _0x1732f2['style']['color'] = _0x32a88e;
            }
        });
        var _0x33f206 = 0x0;
        Object['defineProperty'](this, '_cornerR', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x33f206;
            },
            'set': function(_0x555401) {
                _0x33f206 = _0x555401;
                if (Array['isArray'](_0x555401))
                    this['_node']['style']['borderRadius'] = _0x555401[0x0] + 'px\x20' + _0x555401[0x1] + 'px\x20' + _0x555401[0x2] + 'px\x20' + _0x555401[0x3] + 'px';
                else
                    this['_node']['style']['borderRadius'] = _0x555401 + 'px\x20' + _0x555401 + 'px\x20' + _0x555401 + 'px\x20' + _0x555401 + 'px';
            }
        }),
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x1732f2['style']['display'] && _0x1732f2['style']['display'] !== '' ? _0x1732f2['style']['display'] === 'block' : _0x1732f2['offsetParent'] !== undefined;
            },
            'set': function(_0x22feb3) {
                _0x1732f2['style']['display'] = _0x22feb3 ? 'block' : 'none';
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        Object['defineProperty'](this, '_className', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                return _0x3cd19f;
            },
            'set': function(_0x4c0eb7) {
                _0x3cd19f = _0x4c0eb7,
                _0x1732f2['setAttribute']('widget-class', _0x3cd19f);
            }
        }),
        Object['defineProperty'](this, '_font', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x3c7003) {
                this['_node']['style']['font'] = $MISC['fontCheck'](_0x3c7003);
            }
        });
        var _0x80247a = 'transparent';
        Object['defineProperty'](this, '_frameColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x80247a;
            },
            'set': function(_0x1b6ed5) {
                _0x80247a = _0x1b6ed5,
                this['_node']['style']['boxShadow'] = _0x43c8fa === 0x0 ? undefined : 'inset\x200\x200\x200\x20' + _0x43c8fa + 'px\x20' + _0x80247a;
            }
        });
        var _0x43c8fa = 0x0;
        Object['defineProperty'](this, '_frameSize', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x43c8fa;
            },
            'set': function(_0x2b4041) {
                _0x43c8fa = _0x2b4041,
                this['_node']['style']['boxShadow'] = _0x43c8fa === 0x0 ? undefined : 'inset\x200\x200\x200\x20' + _0x43c8fa + 'px\x20' + _0x80247a;
            }
        });
    }
    return _0x4243a2['prototype']['append'] = function(_0x3e91f9) {
        _0x3e91f9['_parent'] = this,
        this['_children']['push'](_0x3e91f9),
        this['_node']['appendChild'](_0x3e91f9['_node']);
    }
    ,
    _0x4243a2['prototype']['remove'] = function(_0x290705, _0x3b63e1) {
        var _0x1b017b = this['_children']['indexOf'](_0x290705);
        _0x1b017b !== -0x1 && (_0x3b63e1 ? (this['_node']['removeChild'](_0x290705['_node']),
        _0x290705['_parent'] = null,
        this['_children']['splice'](_0x1b017b, 0x1)) : this['_children'][_0x1b017b]['dispose']()),
        _0x290705 = null;
    }
    ,
    _0x4243a2['prototype']['dispose'] = function() {
        for (var _0x1a05d4 = this['_children']['pop'](); _0x1a05d4; _0x1a05d4 = this['_children']['pop']()) {
            _0x1a05d4['dispose']();
        }
        this['_children'] = null;
        if (this['_parent']) {
            this['_parent']['_node']['removeChild'](this['_node']);
            var _0x34492d = this['_parent']['_children']
              , _0x7cd167 = _0x34492d['indexOf'](this);
            _0x34492d['splice'](_0x7cd167, 0x1),
            this['_parent'] = null;
        }
    }
    ,
    _0x4243a2['prototype']['deepWdgtCount'] = function() {
        var _0x5cd12c = 0x1;
        return this['_children']['forEach'](function(_0x27fa22) {
            _0x5cd12c += _0x27fa22['deepWdgtCount']();
        }),
        _0x5cd12c;
    }
    ,
    _0x4243a2['prototype']['deepFocusFind'] = function() {
        var _0x59e4d3 = this['_focused'] ? [this] : [];
        return this['_children']['forEach'](function(_0x459725) {
            _0x59e4d3 = _0x59e4d3['concat'](_0x459725['deepFocusFind']());
        }),
        _0x59e4d3;
    }
    ,
    _0x4243a2['prototype']['getChildrenByClassName'] = function(_0x2cf478) {
        var _0x565989 = this['_className'] === _0x2cf478 ? [this] : [];
        return this['_children']['forEach'](function(_0x32565a) {
            var _0x116de1 = _0x32565a['getChildrenByClassName'](_0x2cf478);
            if (_0x116de1)
                _0x565989 = _0x565989['concat'](_0x116de1);
        }),
        _0x565989['length'] > 0x0 ? _0x565989 : undefined;
    }
    ,
    _0x4243a2['prototype']['getScreenBounds'] = function() {
        var _0x2d7260 = {
            'top': this['_top'],
            'left': this['_left'],
            'width': this['_width'],
            'height': this['_height']
        };
        for (var _0x4e5fe3 = this['_parent']; _0x4e5fe3; _0x4e5fe3 = _0x4e5fe3['_parent']) {
            _0x2d7260['top'] += _0x4e5fe3['_top'],
            _0x2d7260['left'] += _0x4e5fe3['_left'];
        }
        return _0x2d7260;
    }
    ,
    _0x4243a2;
}()
  , $ScreenBlackBoard = function() {
    function _0x3649f8() {
        $Widget['call'](this, '<div\x20style=\x27position:\x20absolute;\x20left:\x200;\x20top:\x200;\x20width:\x201280px;\x20height:\x20720px;\x20background-color:\x20rgba(0,0,0,0.68);\x20border-radius:\x205px;\x20overflow:\x20hidden\x27></div>'),
        this['_className'] = 'ScreenLogger';
        var _0x145bbc = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute;\x20top:\x200px;\x20left:\x200px;\x20width:\x201280px;\x20word-wrap:\x20break-word\x27></div>');
        _0x145bbc['style']['transition'] = 'top\x20300ms',
        this['_node']['appendChild'](_0x145bbc);
        var _0x5f1953 = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute;\x20top:\x205px;\x20right:\x200px;\x20width:\x203px;\x20height:\x20100px;\x20background:\x20red\x27></div>');
        _0x5f1953['style']['transition'] = 'top\x20100ms',
        this['_node']['appendChild'](_0x5f1953);
        var _0x1ef53d = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute;\x20top:\x205px;\x20right:\x201px;\x20width:\x201px;\x20bottom:\x205px;\x20background:\x20rgba(255,0,0,0.5)\x27></div>');
        this['_node']['appendChild'](_0x1ef53d);
        var _0x198759 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x198759['replace'](/(\d)+px/m, 0x12 + 'px'),
        Object['defineProperty'](this, '_text', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x3d0a42 = _0x145bbc['innerHTML'];
                return _0x3d0a42 = _0x3d0a42['replace'](new RegExp('&nbsp;&nbsp;&nbsp;&nbsp;','g'), '\x09'),
                _0x3d0a42 = _0x3d0a42['replace'](new RegExp('&nbsp;','g'), '\x20'),
                _0x3d0a42 = _0x3d0a42['replace'](new RegExp('<br>','g'), '\x0a'),
                _0x3d0a42 = _0x3d0a42['replace'](new RegExp('</span>','g'), ''),
                _0x3d0a42 = _0x3d0a42['replace'](new RegExp('<span[^<]*>','g'), ''),
                _0x3d0a42 = _0x3d0a42['replace'](new RegExp('&lt;','g'), '<'),
                _0x3d0a42 = _0x3d0a42['replace'](new RegExp('&gt;','g'), '>'),
                _0x3d0a42;
            },
            'set': function(_0x4827ae) {
                var _0x63a5ae = _0x4827ae['replace'](new RegExp('\x09','g'), '&nbsp;&nbsp;&nbsp;&nbsp;');
                _0x63a5ae = _0x63a5ae['replace'](new RegExp('\x20','g'), '&nbsp;'),
                _0x63a5ae = _0x63a5ae['replace'](new RegExp('<','g'), '&lt;'),
                _0x63a5ae = _0x63a5ae['replace'](new RegExp('>','g'), '&gt;'),
                _0x63a5ae = _0x63a5ae['replace'](new RegExp('\x0a','g'), '<br>'),
                _0x145bbc['innerHTML'] = _0x63a5ae,
                _0x264a22['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x5dbec4 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x5dbec4) ? this['_node']['getBoundingClientRect']()['width'] : _0x5dbec4;
            },
            'set': function(_0x2225c9) {
                this['_node']['style']['width'] = _0x2225c9 + 'px',
                _0x145bbc['style']['width'] = _0x2225c9 + 'px',
                _0x264a22['bind'](this)();
            }
        }),
        this['print'] = function(_0x4a1622, _0x1dc890) {
            _0x39a25e['bind'](this)(_0x4a1622, _0x1dc890);
        }
        ,
        this['println'] = function(_0x53e42b, _0x37eca8) {
            _0x39a25e['bind'](this)(_0x53e42b + '\x0a', _0x37eca8);
        }
        ,
        this['scrollUp'] = function() {
            var _0x51d786 = this['_node']['offsetHeight']
              , _0x30ed8b = _0x145bbc['offsetHeight'];
            if (_0x30ed8b > _0x51d786) {
                var _0x1a56ff = 'abcABC'['bounds'](this['_font'])['height']
                  , _0x4d1409 = parseInt(_0x145bbc['style']['top']) - _0x1a56ff;
                if (_0x4d1409 + _0x30ed8b < _0x51d786)
                    _0x4d1409 = _0x51d786 - _0x30ed8b;
                _0x145bbc['style']['top'] = _0x4d1409 + 'px',
                _0x48c269['bind'](this)();
            }
        }
        ,
        this['scrollDown'] = function() {
            var _0x35c5d7 = this['_node']['offsetHeight']
              , _0x56ce89 = _0x145bbc['offsetHeight'];
            if (_0x56ce89 > _0x35c5d7) {
                var _0xd5f19d = 'abcABC'['bounds'](this['_font'])['height']
                  , _0x64c48b = parseInt(_0x145bbc['style']['top']) + _0xd5f19d;
                if (_0x64c48b > 0x0)
                    _0x64c48b = 0x0;
                _0x145bbc['style']['top'] = _0x64c48b + 'px',
                _0x48c269['bind'](this)();
            }
        }
        ;
        var _0x264a22 = function() {
            if (_0x145bbc['offsetHeight'] !== 0x0) {
                var _0x2a18ce = _0x145bbc['offsetHeight']
                  , _0x4bc496 = _0x145bbc['offsetTop']
                  , _0xafe0b = this['_node']['offsetHeight']
                  , _0x4e9809 = _0x2a18ce - _0xafe0b;
                _0x4e9809 > 0x0 && _0x4bc496 !== -_0x4e9809 && (_0x145bbc['style']['top'] = _0xafe0b - _0x2a18ce + 'px'),
                _0x48c269['bind'](this)();
            } else
                setTimeout(_0x264a22['bind'](this), 0x5);
        }
          , _0x39a25e = function(_0x1cb987, _0x3d651c) {
            var _0x1b5860 = _0x1cb987['replace'](new RegExp('\x09','g'), '&nbsp;&nbsp;&nbsp;&nbsp;');
            _0x1b5860 = _0x1b5860['replace'](new RegExp('\x20','g'), '&nbsp;'),
            _0x1b5860 = _0x1b5860['replace'](new RegExp('<','g'), '&lt;'),
            _0x1b5860 = _0x1b5860['replace'](new RegExp('>','g'), '&gt;'),
            _0x1b5860 = _0x1b5860['replace'](new RegExp('\x0a','g'), '<br>'),
            _0x3d651c && (_0x1b5860 = '<span\x20style=\x27color:\x20' + _0x3d651c + '\x27>' + _0x1b5860 + '</span>'),
            _0x145bbc['innerHTML'] += _0x1b5860,
            _0x264a22['bind'](this)();
        }
          , _0x48c269 = function() {
            var _0x757748 = this['_node']['offsetHeight']
              , _0x5d0fcd = _0x145bbc['offsetHeight'];
            if (_0x5d0fcd > _0x757748) {
                _0x5f1953['style']['display'] = 'block',
                _0x1ef53d['style']['display'] = 'block';
                var _0x3b1aab = _0x757748 * _0x757748 / _0x5d0fcd;
                _0x5f1953['style']['height'] = _0x3b1aab + 'px';
                var _0x3cd4ed = 0x0
                  , _0x554840 = -(_0x757748 - _0x5d0fcd)
                  , _0xf88c93 = 0x0
                  , _0x1437a4 = _0x757748 - 0xa - _0x3b1aab
                  , _0x3edff9 = -parseInt(_0x145bbc['style']['top'])
                  , _0x113901 = _0x3edff9 / (_0x554840 - _0x3cd4ed) * (_0x1437a4 - _0xf88c93) + 0x5;
                _0x5f1953['style']['top'] = _0x113901 + 'px';
            } else
                _0x5f1953['style']['display'] = 'none',
                _0x1ef53d['style']['display'] = 'none';
        };
    }
    return _0x3649f8['prototype'] = Object['create']($Widget['prototype']),
    _0x3649f8['prototype']['constructor'] = _0x3649f8,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x3649f8()),
            this['instance'];
        }
    };
}()
  , $Text = function() {
    function _0x26ac79(_0x53d166) {
        $Widget['call'](this, '<div\x20style=\x27position:\x20absolute;\x20top:\x200px;\x20left:\x200px;\x20white-space:\x20nowrap\x27>' + _0x53d166['replace'](/ /g, '&nbsp;') + '</div>'),
        this['_className'] = 'Text';
        function _0x5aa1ca() {
            if (this['_text']) {
                var _0x35f230 = this['_text']['bounds'](this['_font'], this['_letterSpacing']);
                this['_width'] = _0x35f230['width'],
                this['_height'] = _0x35f230['height'],
                this['_node']['style']['lineHeight'] = this['_height'] + 'px';
            }
        }
        Object['defineProperty'](this, '_text', {
            'get': function() {
                return this['_node']['innerHTML']['replace'](/&nbsp;/g, '\x20');
            },
            'set': function(_0xca71ca) {
                this['_node']['innerHTML'] = _0xca71ca['replace'](/ /g, '&nbsp;'),
                _0x5aa1ca['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_font', {
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x12aa78) {
                this['_node']['style']['font'] = $MISC['fontCheck'](_0x12aa78),
                _0x5aa1ca['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_letterSpacing', {
            'get': function() {
                return parseFloat(this['_node']['style']['letterSpacing']);
            },
            'set': function(_0xc8e082) {
                this['_node']['style']['letterSpacing'] = _0xc8e082 + 'px',
                _0x5aa1ca['bind'](this)();
            }
        }),
        this['_node']['style']['letterSpacing'] = '0px',
        this['_font'] = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
    }
    return _0x26ac79['prototype'] = Object['create']($Widget['prototype']),
    _0x26ac79['prototype']['constructor'] = _0x26ac79,
    _0x26ac79;
}()
  , $Label = function() {
    function _0x3b0c87() {
        $Widget['call'](this),
        this['_className'] = 'Label';
        var _0x43e0a5 = new $Widget();
        _0x43e0a5['_left'] = 0x0,
        _0x43e0a5['_top'] = 0x0,
        _0x43e0a5['_node']['style']['overflow'] = 'hidden',
        this['append'](_0x43e0a5);
        var _0x3c3ac8 = new $Widget('<div\x20style=\x27position:\x20absolute;\x20overflow:\x20hidden;\x20white-space:\x20nowrap;\x20text-overflow:\x20ellipsis\x27></div>');
        _0x3c3ac8['_left'] = 0x0,
        _0x3c3ac8['_top'] = 0x0,
        _0x3c3ac8['_node']['style']['textAlign'] = 'left',
        _0x3c3ac8['_node']['style']['webkitLineClamp'] = 0x1,
        _0x43e0a5['append'](_0x3c3ac8);
        var _0x56a4fd = function() {
            _0x43e0a5['_width'] = this['_width'],
            _0x43e0a5['_height'] = this['_rowH'],
            _0x3c3ac8['_left'] = this['_textHGap'],
            _0x3c3ac8['_width'] = _0x43e0a5['_width'] - 0x2 * this['_textHGap'],
            _0x3c3ac8['_height'] = _0x43e0a5['_height'];
            switch (this['_textVerticalAlign']) {
            case $MultilineLabel['TOP']:
                _0x43e0a5['_top'] = 0x0;
                break;
            case $MultilineLabel['CENTER']:
                _0x43e0a5['_top'] = (this['_height'] - _0x43e0a5['_height']) / 0x2;
                break;
            case $MultilineLabel['BOTTOM']:
                _0x43e0a5['_top'] = this['_height'] - _0x43e0a5['_height'];
                break;
            }
        };
        Object['defineProperty'](this, '_font', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x5c19a6) {
                _0x5c19a6 = $MISC['fontCheck'](_0x5c19a6),
                this['_node']['style']['font'] = _0x5c19a6,
                this['_rowH'] = _0x5c19a6['replace'](/[^(\d|\.)]/gm, '');
            }
        });
        var _0x2f7ee5 = 0x0;
        Object['defineProperty'](this, '_textHGap', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2f7ee5;
            },
            'set': function(_0x4a91a2) {
                _0x2f7ee5 = _0x4a91a2,
                _0x56a4fd['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x3ebcb6 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x3ebcb6) ? this['_node']['getBoundingClientRect']()['width'] : _0x3ebcb6;
            },
            'set': function(_0xe87d49) {
                this['_node']['style']['width'] = _0xe87d49 + 'px',
                _0x56a4fd['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x41fd60 = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x41fd60) ? this['_node']['getBoundingClientRect']()['height'] : _0x41fd60;
            },
            'set': function(_0x285661) {
                this['_node']['style']['height'] = _0x285661 + 'px',
                _0x56a4fd['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_letterSpacing', {
            'get': function() {
                return parseFloat(_0x3c3ac8['_node']['style']['letterSpacing']);
            },
            'set': function(_0xa825ee) {
                _0x3c3ac8['_node']['style']['letterSpacing'] = _0xa825ee + 'px';
            }
        }),
        Object['defineProperty'](this, '_rowH', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (_0x3c3ac8['_node']['style']['lineHeight'])
                    return parseFloat(_0x3c3ac8['_node']['style']['lineHeight']);
                else
                    return undefined;
            },
            'set': function(_0x3b6955) {
                _0x3b6955 = _0x3b6955['toString']()['replace'](/[^(\d|\.)]/gm, ''),
                _0x3c3ac8['_node']['style']['lineHeight'] = _0x3b6955 + 'px',
                _0x56a4fd['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_text', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3c3ac8['_node']['innerHTML'];
            },
            'set': function(_0x159e69) {
                _0x3c3ac8['_node']['innerHTML'] = _0x159e69;
            }
        });
        var _0x47b284 = $MultilineLabel['TOP'];
        Object['defineProperty'](this, '_textVerticalAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x47b284;
            },
            'set': function(_0x5c7a6f) {
                _0x47b284 = _0x5c7a6f,
                _0x56a4fd['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_textAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3c3ac8['_node']['style']['textAlign'];
            },
            'set': function(_0xa3cbbe) {
                _0x3c3ac8['_node']['style']['textAlign'] = _0xa3cbbe;
            }
        });
        var _0x5aeb26 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x5aeb26['replace'](/(\d)+px/m, 0xc + 'px');
    }
    return _0x3b0c87['prototype'] = Object['create']($Widget['prototype']),
    _0x3b0c87['prototype']['constructor'] = _0x3b0c87,
    _0x3b0c87;
}()
  , $ScrollLabel = function() {
    function _0x5cd680() {
        $Label['call'](this),
        this['_className'] = 'ScrollLabel';
        var _0x18c46c = this['_children'][0x0]
          , _0x55e84f = _0x18c46c['_children'][0x0]
          , _0x5baa94 = new $Widget('<div\x20style=\x27position:\x20absolute;\x20display:\x20-webkit-box;\x20-webkit-box-orient:\x20vertical\x27></div>');
        _0x5baa94['_background'] = _0x55e84f['_background'],
        _0x5baa94['_visible'] = ![],
        _0x18c46c['append'](_0x5baa94),
        Object['defineProperty'](this, '_scrollSpeed', {
            'value': 0x64,
            'writable': !![]
        }),
        Object['defineProperty'](this, '_scroll', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5baa94['_visible'];
            },
            'set': function(_0x11e818) {
                if (_0x11e818) {
                    var _0x59edb8 = _0x55e84f['_node']['innerHTML']['width'](this['_font'], this['_letterSpacing']);
                    this['_width'] < _0x59edb8 && (_0x55e84f['_visible'] = ![],
                    _0x5baa94['_visible'] = !![],
                    _0x5baa94['_node']['style']['letterSpacing'] = _0x55e84f['_node']['style']['letterSpacing'],
                    _0x5baa94['_node']['style']['textAlign'] = _0x55e84f['_node']['style']['textAlign'],
                    _0x5baa94['_node']['style']['lineHeight'] = _0x55e84f['_node']['style']['lineHeight'],
                    _0x5baa94['_node']['innerHTML'] = _0x55e84f['_node']['innerHTML'],
                    _0x5baa94['_bounds'] = _0x55e84f['_bounds'],
                    _0x5baa94['_width'] = _0x5baa94['_node']['innerHTML']['width'](this['_font'], this['_letterSpacing']),
                    _0x5baa94['_node']['style']['transition'] = '',
                    _0x5baa94['_node']['offsetWidth'],
                    _0x5baa94['_node']['style']['transition'] = 'left\x20linear\x20' + (_0x5baa94['_width'] - _0x55e84f['_width']) / this['_scrollSpeed'] + 's',
                    _0x5baa94['_left'] -= _0x5baa94['_width'] - _0x55e84f['_width']);
                } else
                    _0x5baa94['_node']['style']['transition'] = '',
                    _0x5baa94['_node']['offsetWidth'],
                    _0x5baa94['_visible'] = ![],
                    _0x55e84f['_node']['style']['display'] = 'block';
            }
        });
    }
    return _0x5cd680['prototype'] = Object['create']($Label['prototype']),
    _0x5cd680['prototype']['constructor'] = _0x5cd680,
    _0x5cd680;
}()
  , $DebugLabel = function() {
    function _0x450a7e() {
        var _0x525d40 = '\x20' + document['title'] + '\x20';
        $Label['call'](this),
        this['_className'] = 'DebugLabel';
        var _0xe8b0c7 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0xe8b0c7['replace'](/(\d)+px/m, 0xf + 'px'),
        this['_top'] = 0xa,
        this['_height'] = 0x1e,
        this['_rowH'] = 0x1e,
        this['_left'] = 0x32,
        this['_width'] = 0x258,
        this['_background'] = 'rgb(255,220,0)',
        this['_color'] = 'rgb(0,93,210)',
        this['_cornerR'] = 0x5,
        this['_textAlign'] = 'center',
        this['_node']['style']['zIndex'] = '100000',
        this['_text'] = _0x525d40;
        function _0x5b1427() {
            var _0x5c6970 = new Date()
              , _0x58d0ae = _0x5c6970['getHours']()
              , _0x35b445 = _0x5c6970['getMinutes']()
              , _0x1ab5d9 = _0x5c6970['getSeconds']();
            _0x58d0ae = (_0x58d0ae < 0xa ? '0' : '') + _0x58d0ae,
            _0x35b445 = (_0x35b445 < 0xa ? '0' : '') + _0x35b445,
            _0x1ab5d9 = (_0x1ab5d9 < 0xa ? '0' : '') + _0x1ab5d9;
            var _0x483ba2 = this['_text'];
            _0x483ba2 = _0x483ba2['replace'](/⌚\d\d:..:../gm, ''),
            _0x483ba2 += '⌚' + _0x58d0ae + ':' + _0x35b445 + ':' + _0x1ab5d9,
            this['_text'] = _0x483ba2;
        }
        setInterval(_0x5b1427['bind'](this), 0x3e8),
        _0x5b1427['bind'](this)();
    }
    return _0x450a7e['prototype'] = Object['create']($Label['prototype']),
    _0x450a7e['prototype']['constructor'] = _0x450a7e,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x450a7e()),
            this['instance'];
        }
    };
}()
  , $MultilineLabel = function() {
    function _0x3f06c7() {
        $Widget['call'](this),
        this['_className'] = 'MultilineLabel';
        var _0x2f8319 = new $Widget();
        _0x2f8319['_left'] = 0x0,
        _0x2f8319['_top'] = 0x0,
        _0x2f8319['_node']['style']['overflow'] = 'hidden',
        this['append'](_0x2f8319);
        var _0x5c12f = new $Widget('<div\x20style=\x27position:\x20absolute;\x20display:\x20-webkit-box;\x20-webkit-box-orient:\x20vertical\x27></div>');
        _0x5c12f['_left'] = 0x0,
        _0x5c12f['_top'] = 0x0,
        _0x5c12f['_node']['style']['textAlign'] = 'left',
        _0x2f8319['append'](_0x5c12f);
        var _0x3d4921 = function() {
            this['_rowCapacity'] && (_0x2f8319['_width'] = this['_width'],
            _0x2f8319['_height'] = this['_rowCapacity'] * this['_rowH'],
            _0x5c12f['_left'] = this['_textHGap'],
            _0x5c12f['_width'] = _0x2f8319['_width'] - 0x2 * this['_textHGap'],
            _0x5c12f['_height'] = _0x2f8319['_height'],
            _0x5c12f['_node']['style']['webkitLineClamp'] = this['_rowCapacity']);
            switch (this['_textVerticalAlign']) {
            case $MultilineLabel['TOP']:
                _0x5c12f['_top'] = 0x0;
                break;
            case $MultilineLabel['CENTER']:
                _0x5c12f['_top'] = (this['_height'] - _0x5c12f['_height']) / 0x2;
                break;
            case $MultilineLabel['BOTTOM']:
                _0x5c12f['_top'] = this['_height'] - _0x5c12f['_height'];
                break;
            }
        };
        Object['defineProperty'](this, '_font', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x45dbb0) {
                _0x45dbb0 = $MISC['fontCheck'](_0x45dbb0),
                this['_node']['style']['font'] = _0x45dbb0,
                this['_rowH'] = _0x45dbb0['replace'](/[^(\d|\.)]/gm, '');
            }
        });
        var _0x439694 = 0x0;
        Object['defineProperty'](this, '_textHGap', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x439694;
            },
            'set': function(_0x94009a) {
                _0x439694 = _0x94009a,
                _0x3d4921['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x1d1721 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x1d1721) ? this['_node']['getBoundingClientRect']()['width'] : _0x1d1721;
            },
            'set': function(_0x2586cd) {
                this['_node']['style']['width'] = _0x2586cd + 'px',
                _0x3d4921['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x8e5116 = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x8e5116) ? this['_node']['getBoundingClientRect']()['height'] : _0x8e5116;
            },
            'set': function(_0x3a76f5) {
                this['_node']['style']['height'] = _0x3a76f5 + 'px',
                _0x3d4921['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_letterSpacing', {
            'get': function() {
                return parseFloat(_0x5c12f['_node']['style']['letterSpacing']);
            },
            'set': function(_0x1135d3) {
                _0x5c12f['_node']['style']['letterSpacing'] = _0x1135d3 + 'px';
            }
        }),
        Object['defineProperty'](this, '_rowCapacity', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x18b24d = undefined;
                if (_0x5c12f['_node']['style']['lineHeight']) {
                    var _0x30f470 = parseFloat(_0x5c12f['_node']['style']['lineHeight']);
                    if (!isNaN(_0x30f470))
                        _0x18b24d = _0x30f470;
                }
                if (_0x18b24d) {
                    if (this['_height'] > 0x0)
                        return Math['floor'](this['_height'] / _0x18b24d);
                }
                return undefined;
            }
        }),
        Object['defineProperty'](this, '_rowH', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (_0x5c12f['_node']['style']['lineHeight'])
                    return parseFloat(_0x5c12f['_node']['style']['lineHeight']);
                else
                    return undefined;
            },
            'set': function(_0x4db8b1) {
                _0x4db8b1 = _0x4db8b1['toString']()['replace'](/[^(\d|\.)]/gm, ''),
                _0x5c12f['_node']['style']['lineHeight'] = _0x4db8b1 + 'px',
                _0x3d4921['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_text', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5c12f['_node']['innerHTML'];
            },
            'set': function(_0x1c3cb7) {
                _0x5c12f['_node']['innerHTML'] = _0x1c3cb7;
            }
        }),
        Object['defineProperty'](this, '_rowsStats', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x2b85a1 = document['getElementById']('boudoir');
                _0x2b85a1['style'] = '',
                _0x2b85a1['style']['transform'] = 'scale(0.66666666666666666667)',
                _0x2b85a1['style']['transformOrigin'] = '0\x200',
                _0x2b85a1['style']['position'] = 'absolute',
                _0x2b85a1['style']['left'] = '2000px',
                _0x2b85a1['style']['top'] = '2000px',
                _0x2b85a1['style']['display'] = '-webkit-box',
                _0x2b85a1['style']['webkitBoxOrient'] = 'vertical',
                _0x2b85a1['style']['background'] = _0x2b85a1['style']['color'] = 'transparent',
                _0x2b85a1['style']['width'] = _0x5c12f['_width'] + 'px',
                _0x2b85a1['innerText'] = this['_text']['replace'](/<br>/gmi, '\x0a'),
                _0x2b85a1['style']['font'] = this['_font'],
                _0x2b85a1['style']['lineHeight'] = this['_rowH'] + 'px',
                _0x2b85a1['style']['letterSpacing'] = this['_letterSpacing'] + 'px',
                _0x2b85a1['style']['textAlign'] = _0x5c12f['_node']['style']['textAlign'];
                var _0x2e101b = Math['abs'](_0x2b85a1['offsetHeight'] - this['_rowH']) <= 0x1 ? this['_rowH'] : _0x2b85a1['offsetHeight']
                  , _0x742792 = Math['ceil'](_0x2e101b / this['_rowH'])
                  , _0x4843c7 = Math['floor'](this['_height'] / this['_rowH'])
                  , _0x25a342 = _0x742792 - _0x4843c7;
                return {
                    'totalRowsCount': _0x742792,
                    'shownRowsCount': _0x4843c7,
                    'cuttedRowsCount': _0x25a342 >= 0x0 ? _0x25a342 : 0x0
                };
            }
        });
        var _0x588516 = $MultilineLabel['TOP'];
        Object['defineProperty'](this, '_textVerticalAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x588516;
            },
            'set': function(_0x3adc26) {
                _0x588516 = _0x3adc26,
                _0x3d4921['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_textAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (_0x5c12f['_node']['style']['textAlign'])
                    return parseFloat(_0x5c12f['_node']['style']['textAlign']);
                else
                    return undefined;
            },
            'set': function(_0xb2ed05) {
                _0x5c12f['_node']['style']['textAlign'] = _0xb2ed05;
            }
        });
        var _0x586133 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x586133['replace'](/(\d)+px/m, 0xc + 'px');
    }
    return _0x3f06c7['prototype'] = Object['create']($Widget['prototype']),
    _0x3f06c7['prototype']['constructor'] = _0x3f06c7,
    _0x3f06c7['TOP'] = 0x0,
    _0x3f06c7['CENTER'] = 0x1,
    _0x3f06c7['BOTTOM'] = 0x2,
    _0x3f06c7;
}()
  , $Svg = function() {
    function _0x4e4840(_0x43a3fc) {
        var _0x47fd62 = _0x43a3fc && _0x43a3fc['constructor'] === String ? $MISC['html2Element'](_0x43a3fc) : _0x43a3fc;
        $Widget['call'](this, _0x47fd62),
        this['_className'] = 'Svg';
        function _0x505df9() {
            var _0x2d8d1a = [];
            function _0x11b343(_0xc262ac) {
                if (_0xc262ac['getAttribute'] && _0xc262ac['getAttribute']('fill'))
                    _0x2d8d1a['push'](_0xc262ac);
                if (_0xc262ac['childNodes'])
                    for (var _0x2b7e4a = 0x0; _0x2b7e4a < _0xc262ac['childNodes']['length']; _0x2b7e4a++) {
                        _0x11b343(_0xc262ac['childNodes'][_0x2b7e4a]);
                    }
            }
            return _0x11b343(this['_node']),
            _0x2d8d1a;
        }
        Object['defineProperty'](this, '_viewBox', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                var _0x236673 = this['_node']['getAttribute']('viewBox');
                return _0x236673 ? (_0x236673 = _0x236673['split']('\x20'),
                {
                    'x': Number(_0x236673[0x0]),
                    'y': Number(_0x236673[0x1]),
                    'width': Number(_0x236673[0x2]),
                    'height': Number(_0x236673[0x3])
                }) : {
                    'x': 0x0,
                    'y': 0x0,
                    'width': Number(this['_node']['getAttribute']('width')),
                    'height': Number(this['_node']['getAttribute']('height'))
                };
            }
        }),
        Object['defineProperty'](this, '_svgName', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                return this['_node']['getAttribute']('name');
            },
            'set': function(_0x3fbd3b) {
                this['_node']['setAttribute']('name', _0x3fbd3b);
            }
        }),
        Object['defineProperty'](this, '_fill', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                var _0x5819d0 = _0x505df9['bind'](this)()
                  , _0x4ff703 = [];
                for (var _0xd35a0e = 0x0; _0xd35a0e < _0x5819d0['length']; _0xd35a0e++)
                    _0x4ff703['push'](_0x5819d0[_0xd35a0e]['getAttribute']('fill'));
                return _0x4ff703;
            },
            'set': function(_0x3e4aea) {
                if (!Array['isArray'](_0x3e4aea))
                    _0x3e4aea = [_0x3e4aea];
                var _0x2649e7 = _0x505df9['bind'](this)();
                for (var _0x31c59a = 0x0, _0xc1c53 = 0x0; _0x31c59a < _0x2649e7['length']; _0x31c59a++) {
                    _0x2649e7[_0x31c59a]['setAttribute']('fill', _0x3e4aea[_0xc1c53]),
                    _0xc1c53 = _0xc1c53 + 0x1 <= _0x3e4aea['length'] - 0x1 ? _0xc1c53 + 0x1 : _0xc1c53;
                }
            }
        }),
        this['_node']['setAttribute']('preserveAspectRatio', 'none'),
        this['_width'] = this['_viewBox']['width'],
        this['_height'] = this['_viewBox']['height'];
    }
    return _0x4e4840['prototype'] = Object['create']($Widget['prototype']),
    _0x4e4840['prototype']['constructor'] = _0x4e4840,
    _0x4e4840;
}()
  , $Img = function() {
    function _0x114083(_0x2fe104) {
        $Widget['call'](this, '<img\x20src=\x27' + (_0x2fe104 || $Img['BLACK']) + '\x27>'),
        this['_className'] = 'Img',
        this['_background'] = '#000',
        this['_node']['addEventListener']('load', function() {
            _0x1b8cef = $Img['READY'],
            _0x45e3f1['bind'](this)();
        }
        ['bind'](this)),
        this['_node']['addEventListener']('error', function(_0x4848f9) {
            _0x1b8cef = $Img['ERROR'],
            _0x45e3f1['bind'](this)();
        }
        ['bind'](this));
        var _0x1b8cef = $Img['IDLE'];
        Object['defineProperty'](this, '_state', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1b8cef;
            }
        }),
        Object['defineProperty'](this, '_src', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['src'];
            },
            'set': function(_0x47ce27) {
                this['_node']['src'] = _0x47ce27;
            }
        });
        var _0x5563cc = [];
        this['addStateChengeListener'] = function(_0x33d011) {
            return _0x5563cc['push'](_0x33d011),
            _0x33d011;
        }
        ,
        this['removeStateChengeListener'] = function(_0xa2342b) {
            var _0x2b0c41 = _0x5563cc['indexOf'](_0xa2342b);
            return _0x2b0c41 >= 0x0 ? (_0x5563cc['splice'](_0x2b0c41, 0x1),
            !![]) : ![];
        }
        ;
        function _0x45e3f1() {
            var _0x22eb0e = _0x5563cc['slice'](0x0);
            _0x22eb0e['forEach'](function(_0x2c3d0b, _0x55ac3d, _0x1f9dc4) {
                _0x1f9dc4[_0x55ac3d](this['_state']);
            }
            ['bind'](this));
        }
    }
    return _0x114083['prototype'] = Object['create']($Widget['prototype']),
    _0x114083['prototype']['constructor'] = _0x114083,
    _0x114083['IDLE'] = 0x0,
    _0x114083['READY'] = 0x1,
    _0x114083['ERROR'] = 0x2,
    _0x114083['BLACK'] = 'data:image/svg+xml;utf8,<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20style=\x22background:rgb(0,0,0)\x22></svg>',
    _0x114083['TRANSPARENT'] = 'data:image/svg+xml;utf8,<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20style=\x22background:rgba(0,0,0,0)\x22></svg>',
    _0x114083;
}()
  , $Gui = function() {
    function _0x104f23() {
        $Widget['call'](this, '<div\x20style=\x22position:\x20absolute;\x20left:\x200;\x20top:\x200;\x20width:\x201920px;\x20height:\x201080px\x22></div>'),
        this['_className'] = 'Gui';
        var _0x400464 = $BannerCaricamento['getInstance']();
        _0x400464['_node']['style']['zIndex'] = 0x186a0,
        this['append'](_0x400464),
        Object['defineProperty'](this, '_loadingFlag', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x400464['_visible'];
            },
            'set': function(_0x13fd6f) {
                _0x400464['_visible'] = _0x13fd6f;
            }
        });
        var _0x373038 = function(_0x5a1806) {
            if (localStorage && localStorage['length'] === 0x0) {
                $BannerCaricamento['getInstance']()['_visible'] = ![],
                $BannerLancioApp['getInstance']()['_visible'] = ![],
                $BannerLancioRaiPlay['getInstance']()['_visible'] = ![];
                var _0x3322b2 = document['getElementById']('panic_00');
                if (!_0x3322b2) {
                    var _0x2d5ad2 = '<svg\x20id=\x22panic_00\x22\x20style=\x22position:\x20absolute;\x20top:952px;\x20left:\x20794px\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22331\x22\x20height=\x22128\x22\x20viewBox=\x220\x200\x20331\x20128\x22>' + '<defs>' + '<linearGradient\x20id=\x22AB\x22\x20x1=\x22100%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '<stop\x20offset=\x220%\x22\x20stop-color=\x22#000063\x22/>' + '<stop\x20offset=\x22100%\x22\x20stop-color=\x22#000098\x22/>' + '</linearGradient>' + '</defs>' + '<g\x20fill-rule=\x22evenodd\x22>' + '<path\x20fill=\x22url(#AB)\x22\x20d=\x22M29.5\x2030\x20H249\x20V98\x20H28.5\x20z\x22\x20transform=\x22matrix(1.2335600907029478,\x200,\x200,\x201,\x20-6.656460200848221,\x200)\x22></path>' + '<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20style=\x22white-space:\x20pre;\x22>' + '<tspan\x20x=\x2265\x22\x20y=\x2270.39\x22>dati\x20non\x20trovati</tspan>' + '</text>' + '<path\x20fill=\x22#FFFFFF\x22\x20d=\x22M249\x2098\x20H279\x20V128\x20H249\x20z\x22\x20transform=\x22matrix(1,\x200,\x200,\x201,\x2051.5,\x200)\x22></path>' + '<path\x20fill=\x22#2323F4\x22\x20fill-opacity=\x22.9\x22\x20d=\x22M\x20280.5\x2030\x20L\x20300.5\x2030\x20L\x20300.5\x2050\x20L\x20280.5\x2050\x20L\x20280.5\x2030\x20Z\x22></path>' + '<path\x20fill=\x22#2323F4\x22\x20d=\x22M0\x200H30V30H0z\x22></path>' + '</g>' + '</svg>'
                      , _0x4f6cc1 = document['createElement']('div');
                    _0x4f6cc1['innerHTML'] = _0x2d5ad2,
                    _0x3322b2 = _0x4f6cc1['firstChild'],
                    document['getElementById']('mainFrame')['appendChild'](_0x3322b2);
                } else
                    _0x3322b2['style']['transition'] = '',
                    _0x3322b2['offsetWidth'],
                    _0x3322b2['style']['opacity'] = '1';
                setTimeout(function() {
                    _0x3322b2['style']['transition'] = 'opacity\x205s\x20cubic-bezier(1,-0.01,1,-0.01)',
                    _0x3322b2['offsetWidth'],
                    _0x3322b2['style']['opacity'] = '0';
                }, 0x0);
                return;
            }
            for (var _0x45cff1 = 0x0, _0xe30153 = ![]; !_0xe30153 && _0x45cff1 < this['_children']['length']; _0x45cff1++) {
                _0xe30153 = this['_children'][_0x45cff1]['_visible'] && this['_children'][_0x45cff1]['_className'] !== 'RadioPoster' && this['_children'][_0x45cff1]['_className'] !== 'ScreenLogger' && this['_children'][_0x45cff1]['_className'] !== 'BannerReaStreaming' && this['_children'][_0x45cff1]['_className'] !== 'SceneTA' && this['_children'][_0x45cff1]['_className'] !== 'Iframe';
            }
            switch (_0x5a1806['keyCode']) {
            case KeyEvent['VK_GREEN']:
                if ($StreamingService['isChannelLive']())
                    $SubtitleService['toggle']();
                else {
                    if (DEBUG || CONSOLE_DEBUG) {
                        if (!!window['pico']) {
                            var _0x466bdb = document['getElementById']('pico-dashboard');
                            !_0x466bdb && (_0x466bdb = $MISC['html2Element']('<div\x20id=\x22pico-dashboard\x22\x20style=\x22position:\x20absolute;\x20width:\x201280px;\x20height:\x20720px\x22></div>'),
                            document['body']['appendChild'](_0x466bdb)),
                            pico['dashboard']['createUI'](_0x466bdb);
                        }
                    }
                }
                break;
            case KeyEvent['VK_YELLOW']:
                if ($StreamingService['isChannelLive']()) {
                    var _0x1807d6 = $VideoManager['getInstance']()['trackSwitch']();
                    _0x1807d6 && _0x1807d6['track'] && (println('audio\x20' + _0x1807d6['track']['language'] + '\x20(PID=' + _0x1807d6['track']['pid'] + ',\x20encoding\x20' + (_0x1807d6['track']['encoding'] || 'N/A') + ')'),
                    $SimpleBanner['getInstance']()['show'](!![], 'Audio:\x20' + $VideoManager['getInstance']()['getTrackName'](_0x1807d6)));
                } else {
                    var _0x1dd91d = $StreamingService['getPlayer']();
                    if (_0x1dd91d) {
                        var _0x17d8e1 = _0x1dd91d['getAudioTracks']();
                        if (_0x17d8e1['length'] > 0x1)
                            for (_0x45cff1 = 0x0; _0x45cff1 < _0x17d8e1['length']; _0x45cff1++) {
                                _0x17d8e1[_0x45cff1]['enabled'] && (_0x1dd91d['setAudioTrack'](_0x17d8e1[(_0x45cff1 + 0x1) % _0x17d8e1['length']]),
                                $SimpleBanner['getInstance']()['show'](!![], 'Audio:\x20' + _0x17d8e1[(_0x45cff1 + 0x1) % _0x17d8e1['length']]['language']));
                            }
                    }
                }
                break;
            case KeyEvent['VK_BLUE']:
                var _0x4e243d;
                try {
                    if (window['$PwdPane'] && window['$PwdPane']['instance'])
                        _0x4e243d = $PwdPane['getInstance']()['_visible'];
                } catch (_0xc3bce9) {
                    _0x4e243d = ![];
                }
                if (!_0x4e243d) {
                    var _0x3bb264 = $MISC['lunchFromAIT']();
                    if (!_0x3bb264)
                        println('UNABLE\x20TO\x20LAUNCH\x20RAI-PLAY', 'err');
                }
                break;
            case KeyEvent['VK_LEFT']:
            case KeyEvent['VK_RIGHT']:
                if (_0xe30153)
                    return;
                $StreamingService['nextChannel'](_0x5a1806['keyCode'] === KeyEvent['VK_LEFT']);
                break;
            case KeyEvent['VK_UP']:
                $BannerReaStreaming['instance'] && $BannerReaStreaming['instance']['_visible'] && $BannerReaStreaming['instance']['visibleTrigger'](![]);
                if (DEBUG || CONSOLE_DEBUG) {
                    var _0x4798fb = $SceneTA['getInstance']();
                    _0x4798fb['_visible'] && (_0x4798fb['_visible'] = ![]);
                }
                if (!_0xe30153) {
                    var _0x1e20fb = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x1e20fb)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x3eb429 = $BannerPrivacy['getInstance']();
                        _0x3eb429['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x498161() {
                                    var _0x3561ed = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x3561ed);
                                    _0x3561ed['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x498161);
                            });
                        }
                        ,
                        _0x3eb429['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x3eb429);
                    } else {
                        function _0xeb2ef3() {
                            var _0x187e0f = $Scene0['getInstance']();
                            if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                $Gui['getInstance']()['append'](_0x187e0f);
                            _0x187e0f['visibleTrigger'](!![], function() {
                                $Gui['getInstance']()['_loadingFlag'] = ![];
                            });
                        }
                        $Gui['getInstance']()['_loadingFlag'] = !![],
                        !EPG['getEpg'] ? $MISC['loadMainJS'](function() {
                            $Gui['getInstance']()['onInfoLoad'](_0xeb2ef3);
                        }) : _0xeb2ef3();
                    }
                }
                break;
            case KeyEvent['VK_BACK']:
                if (DEBUG || CONSOLE_DEBUG) {
                    var _0x4798fb = $SceneTA['getInstance']();
                    _0x4798fb['_visible'] && (_0x4798fb['_visible'] = ![]);
                }
                if (!_0xe30153) {
                    var _0x1e20fb = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x1e20fb)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x3eb429 = $BannerPrivacy['getInstance']();
                        _0x3eb429['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0xc5014a() {
                                    var _0x4a0396 = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x4a0396);
                                    _0x4a0396['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0xc5014a);
                            });
                        }
                        ,
                        _0x3eb429['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x3eb429);
                    } else {
                        function _0x5c7631() {
                            var _0x2cc80b = $Scene0['getInstance']();
                            if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                $Gui['getInstance']()['append'](_0x2cc80b);
                            var _0x1ae5a5 = EPG['getEpg']()['type'] === 'tv' ? 0x2 : 0x3
                              , _0x589550 = [undefined, undefined, 'CanaliTv', 'CanaliRadio'][_0x1ae5a5]
                              , _0x53f65c = $Scene0['getInstance']()['getChildrenByClassName'](_0x589550)[0x0]
                              , _0x563b17 = _0x53f65c['getChildrenByClassName']('Menu0')[0x0];
                            _0x563b17['_focused'] = !![],
                            _0x2cc80b['_activeSectionIndex'] = _0x1ae5a5,
                            $Scene0['getInstance']()['_menu']['_focused'] = ![],
                            setTimeout(function() {
                                _0x2cc80b['visibleTrigger'](!![], function() {
                                    $Gui['getInstance']()['_loadingFlag'] = ![];
                                });
                            }, 0x64);
                        }
                        $Gui['getInstance']()['_loadingFlag'] = !![],
                        !EPG['getEpg'] ? $MISC['loadMainJS'](function() {
                            $Gui['getInstance']()['onInfoLoad'](_0x5c7631);
                        }) : _0x5c7631();
                    }
                }
                break;
            case KeyEvent['VK_RED']:
                if ($TaService['isTASupported']())
                    $TaService['spotReplacement']['replace']();
                else {
                    if ($TaService['isOn']()) {
                        for (_0x45cff1 = 0x0,
                        _0xe30153 = ![]; !_0xe30153 && _0x45cff1 < this['_children']['length']; _0x45cff1++) {
                            _0xe30153 = this['_children'][_0x45cff1]['_visible'] && this['_children'][_0x45cff1]['_className'] !== 'RadioPoster' && this['_children'][_0x45cff1]['_className'] !== 'ScreenLogger' && this['_children'][_0x45cff1]['_className'] !== 'BannerReaStreaming' && this['_children'][_0x45cff1]['_className'] !== 'BannerLancioApp' && this['_children'][_0x45cff1]['_className'] !== 'BannerLancioRaiPlay' && this['_children'][_0x45cff1]['_className'] !== 'SceneTA';
                        }
                        (DEBUG || CONSOLE_DEBUG) && !_0xe30153 && $TaService['loadCreativity']();
                    }
                }
                break;
            }
        }
        ['bind'](this);
        this['_keyListener'] = _0x373038;
        if (DEBUG || CONSOLE_DEBUG) {
            var _0x51666f = $SceneTA['getInstance']();
            _0x51666f['_visible'] = ![],
            this['append'](_0x51666f);
        }
    }
    return _0x104f23['prototype'] = Object['create']($Widget['prototype']),
    _0x104f23['prototype']['constructor'] = _0x104f23,
    _0x104f23['prototype']['onInfoLoad'] = function(_0x3fbf64) {
        if ($Gui['getInstance']()['getChildrenByClassName']('RadioPoster')) {
            _0x3fbf64();
            return;
        }
        function _0x113045() {
            var _0x29bf53 = new $PendingTaskSentry(0x3,[_0x3fbf64],'loadSentry2');
            new $EpgIgnitor(function() {
                $Gui['getInstance']()['append']($RadioPoster['getInstance']()),
                _0x29bf53['accomplishedTask']('EPG\x20ready\x20👍');
            }
            ),
            new $TgEpgIgnitor(function() {
                _0x29bf53['accomplishedTask']('TG-EPG\x20ready\x20👍');
            }
            ),
            new $RaiPlayEpgIgnitor(function() {
                _0x29bf53['accomplishedTask']('raiplay-EPG\x20ready\x20👍');
            }
            );
        }
        ;var _0x2e0818 = $PendingTaskSentry['getByName']('loaderSnt');
        if (!_0x2e0818)
            _0x113045();
        else
            _0x2e0818['_callbackArr']['push'](_0x113045);
    }
    ,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x104f23(),
            document['getElementById']('mainFrame')['appendChild'](this['instance']['_node'])),
            this['instance'];
        }
    };
}()
  , $Padding = function() {
    function _0x5f4f90() {
        $Widget['call'](this),
        this['_className'] = '[]';
        function _0x4e6113() {
            this['_width'] = (_0x52b5f9 ? _0x52b5f9['_width'] : 0x0) + _0x1f627a + _0x440f12,
            this['_height'] = (_0x52b5f9 ? _0x52b5f9['_height'] : 0x0) + _0x4d41b8 + _0x585628,
            _0x52b5f9 && (_0x52b5f9['_top'] = _0x4d41b8,
            _0x52b5f9['_left'] = _0x1f627a);
        }
        var _0x52b5f9 = undefined;
        Object['defineProperty'](this, '_widget', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x52b5f9;
            },
            'set': function(_0xea9da9) {
                _0x52b5f9 && this['remove'](_0x52b5f9),
                _0x52b5f9 = _0xea9da9,
                this['append'](_0x52b5f9),
                this['_className'] = '[' + (_0xea9da9 ? _0xea9da9['_className'] : '') + ']',
                _0x4e6113['bind'](this)();
            }
        });
        var _0x1f627a = 0x0;
        Object['defineProperty'](this, '_leftStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1f627a;
            },
            'set': function(_0x21c117) {
                _0x1f627a = _0x21c117,
                _0x4e6113['bind'](this)();
            }
        });
        var _0x440f12 = 0x0;
        Object['defineProperty'](this, '_rightStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x440f12;
            },
            'set': function(_0x12818b) {
                _0x440f12 = _0x12818b,
                _0x4e6113['bind'](this)();
            }
        });
        var _0x4d41b8 = 0x0;
        Object['defineProperty'](this, '_topStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4d41b8;
            },
            'set': function(_0x22c15c) {
                _0x4d41b8 = _0x22c15c,
                _0x4e6113['bind'](this)();
            }
        });
        var _0x585628 = 0x0;
        Object['defineProperty'](this, '_bottomStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x585628;
            },
            'set': function(_0x6d6cea) {
                _0x585628 = _0x6d6cea,
                _0x4e6113['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x52b5f9 ? _0x52b5f9['_focused'] : ![];
            },
            'set': function(_0x4ce532) {
                if (_0x52b5f9)
                    _0x52b5f9['_focused'] = _0x4ce532;
            }
        });
    }
    return _0x5f4f90['prototype'] = Object['create']($Widget['prototype']),
    _0x5f4f90['prototype']['constructor'] = _0x5f4f90,
    _0x5f4f90;
}()
  , $Button0 = function() {
    function _0x5c720c() {
        var _0x164923 = '#fff';
        Object['defineProperty'](this, '_focusedColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x164923;
            },
            'set': function(_0x257a9d) {
                _0x164923 = _0x257a9d;
                if (this['_focused'])
                    this['_color'] = _0x164923;
            }
        }),
        Object['defineProperty'](this, '_unfocusedColor', {
            'value': '#fff',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusedBackground', {
            'value': '#000099',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_unfocusedBackground', {
            'value': '#999999',
            'writable': !![]
        }),
        $Label['call'](this),
        this['_className'] = 'Button0',
        this['_color'] = this['_unfocusedColor'],
        this['_font'] = '24px\x20PublicSans-Bold',
        this['_letterSpacing'] = -0.8,
        this['_rowH'] = 0x20,
        this['_textVerticalAlign'] = $MultilineLabel['CENTER'],
        this['_textAlign'] = 'center';
        var _0xe28c47 = undefined
          , _0x2c004c = $MISC['html2Element']('<div\x20style=\x27width:\x20100%;\x20height:\x20100%;\x20background:' + this['_unfocusedBackground'] + ';\x20border-radius:\x202px\x27></div>');
        _0x2c004c['addEventListener']('animationend', function() {
            _0xe28c47 && (_0xe28c47(),
            _0xe28c47 = undefined,
            _0x2c004c['className'] = '');
        }, ![]),
        this['_node']['insertBefore'](_0x2c004c, this['_node']['firstChild']);
        var _0x4ae0b3 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4ae0b3;
            },
            'set': function(_0x46f8d9) {
                _0x4ae0b3 = _0x46f8d9,
                TRANSITION && (_0x2c004c['style']['transition'] = _0x4ae0b3 ? 'background\x20linear\x200.3s' : 'background\x20linear\x200.15s',
                this['_node']['style']['transition'] = _0x4ae0b3 ? 'color\x20linear\x200.3s' : 'color\x20linear\x200.15s'),
                _0x2c004c['style']['background'] = _0x46f8d9 ? this['_focusedBackground'] : this['_unfocusedBackground'],
                this['_color'] = _0x46f8d9 ? this['_focusedColor'] : this['_unfocusedColor'];
            }
        });
        var _0x562ae8 = 0x2;
        Object['defineProperty'](this, '_cornerR', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x562ae8;
            },
            'set': function(_0xf6d2d2) {
                _0x562ae8 = _0xf6d2d2;
                if (Array['isArray'](_0xf6d2d2))
                    _0x2c004c['style']['borderRadius'] = _0xf6d2d2[0x0] + 'px\x20' + _0xf6d2d2[0x1] + 'px\x20' + _0xf6d2d2[0x2] + 'px\x20' + _0xf6d2d2[0x3] + 'px';
                else
                    _0x2c004c['style']['borderRadius'] = _0xf6d2d2 + 'px\x20' + _0xf6d2d2 + 'px\x20' + _0xf6d2d2 + 'px\x20' + _0xf6d2d2 + 'px';
            }
        }),
        this['click'] = function(_0x55689e) {
            if (TRANSITION)
                _0xe28c47 = _0x55689e,
                _0x2c004c['className'] = '',
                _0x2c004c['offsetWidth'],
                _0x2c004c['className'] = 'click';
            else {
                if (_0x55689e)
                    _0x55689e();
            }
        }
        ;
    }
    return _0x5c720c['prototype'] = Object['create']($Label['prototype']),
    _0x5c720c['prototype']['constructor'] = _0x5c720c,
    _0x5c720c;
}()
  , $Button = function() {
    function _0x5b4adc() {
        Object['defineProperty'](this, '_focusedColor', {
            'value': '#fff',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_unfocusedColor', {
            'value': '#fff',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusedBackground', {
            'value': '#000099',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_unfocusedBackground', {
            'value': '#999999',
            'writable': !![]
        }),
        $Label['call'](this),
        this['_className'] = 'Button',
        this['_color'] = this['_unfocusedColor'],
        this['_font'] = '24px\x20PublicSans-Bold',
        this['_letterSpacing'] = -0.8,
        this['_rowH'] = 0x20,
        this['_textVerticalAlign'] = $MultilineLabel['CENTER'],
        this['_textAlign'] = 'center',
        this['_background'] = this['_unfocusedBackground'],
        this['_cornerR'] = 0x2;
        var _0x505cf1 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x505cf1 && (_0x505cf1(),
            _0x505cf1 = undefined);
        }, ![]);
        var _0x43cd11 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x43cd11;
            },
            'set': function(_0x57dd4f) {
                _0x43cd11 = _0x57dd4f;
                if (TRANSITION)
                    this['_node']['style']['transition'] = _0x43cd11 ? 'background\x20linear\x200.3s,\x20color\x20linear\x200.3s' : 'background\x20linear\x200.15s,\x20color\x20linear\x200.15s';
                this['_background'] = _0x57dd4f ? this['_focusedBackground'] : this['_unfocusedBackground'],
                this['_color'] = _0x57dd4f ? this['_focusedColor'] : this['_unfocusedColor'];
            }
        }),
        this['click'] = function(_0x2bf6e2) {
            if (TRANSITION)
                _0x505cf1 = _0x2bf6e2,
                this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = 'click';
            else {
                if (_0x2bf6e2)
                    _0x2bf6e2();
            }
        }
        ;
    }
    return _0x5b4adc['prototype'] = Object['create']($Label['prototype']),
    _0x5b4adc['prototype']['constructor'] = _0x5b4adc,
    _0x5b4adc;
}()
  , $ButtonBack = function() {
    function _0x2961c4() {
        var _0x281765 = 'transparent';
        Object['defineProperty'](this, '_focusedColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x281765;
            },
            'set': function(_0x491b2b) {
                _0x281765 = _0x491b2b;
                if (this['_focused'])
                    _0xf711b7['_fill'] = _0x491b2b;
            }
        });
        var _0x2fe24e = '#fff';
        Object['defineProperty'](this, '_unfocusedColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2fe24e;
            },
            'set': function(_0x3c961d) {
                _0x2fe24e = _0x3c961d;
                if (!this['_focused'])
                    _0xf711b7['_fill'] = _0x3c961d;
            }
        });
        var _0x4b472b = '#fff';
        Object['defineProperty'](this, '_focusedBackground', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4b472b;
            },
            'set': function(_0x3f1862) {
                _0x4b472b = _0x3f1862;
                if (this['_focused'])
                    _0x3b6c5c['style']['background'] = _0x3f1862;
            }
        });
        var _0x3f534a = 'transparent';
        Object['defineProperty'](this, '_unfocusedBackground', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3f534a;
            },
            'set': function(_0x4a9859) {
                _0x3f534a = _0x4a9859;
                if (!this['_focused'])
                    _0x3b6c5c['style']['background'] = _0x4a9859;
            }
        }),
        $Widget['call'](this),
        this['_className'] = 'ButtonBack',
        this['_bounds'] = {
            'top': 0x14,
            'left': 0x14,
            'width': 0x50,
            'height': 0x50
        };
        var _0xf711b7 = new $Svg($DataLoader['getInstance']()['getSvgCode']('indietro'));
        this['_fill'] = this['_unfocusedColor'],
        _0xf711b7['_bounds'] = {
            'top': 0x15,
            'left': 0x15,
            'width': 0x26,
            'height': 0x26
        },
        this['append'](_0xf711b7);
        var _0xcec827 = undefined
          , _0x3b6c5c = $MISC['html2Element']('<div\x20style=\x27width:\x20100%;\x20height:\x20100%;\x20background:' + this['_unfocusedBackground'] + ';\x20border-radius:\x2050%\x27></div>');
        _0x3b6c5c['addEventListener']('animationend', function() {
            _0xcec827 && (_0xcec827(),
            _0xcec827 = undefined);
        }, ![]),
        this['_node']['insertBefore'](_0x3b6c5c, this['_node']['firstChild']);
        var _0x5e8df4 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5e8df4;
            },
            'set': function(_0x31ed78) {
                _0x5e8df4 = _0x31ed78;
                if (TRANSITION)
                    _0x3b6c5c['style']['transition'] = _0x5e8df4 ? 'background\x20linear\x200.3s' : 'background\x20linear\x200.15s';
                _0x3b6c5c['style']['background'] = _0x31ed78 ? this['_focusedBackground'] : this['_unfocusedBackground'],
                _0xf711b7['_fill'] = _0x31ed78 ? this['_focusedColor'] : this['_unfocusedColor'];
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x476884 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x476884) ? this['_node']['getBoundingClientRect']()['width'] : _0x476884;
            },
            'set': function(_0x8316cd) {
                this['_node']['style']['width'] = _0x8316cd + 'px',
                _0xf711b7['_top'] = 0x15 * _0x8316cd / 0x50,
                _0xf711b7['_width'] = 0x26 * _0x8316cd / 0x50;
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x5b822c = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x5b822c) ? this['_node']['getBoundingClientRect']()['height'] : _0x5b822c;
            },
            'set': function(_0x4d20a4) {
                this['_node']['style']['height'] = _0x4d20a4 + 'px',
                _0xf711b7['_left'] = 0x15 * _0x4d20a4 / 0x50,
                _0xf711b7['_height'] = 0x26 * _0x4d20a4 / 0x50;
            }
        }),
        this['click'] = function(_0x14a4d9) {
            if (TRANSITION)
                _0xcec827 = _0x14a4d9,
                _0x3b6c5c['className'] = '',
                _0x3b6c5c['offsetWidth'],
                _0x3b6c5c['className'] = 'click';
            else {
                if (_0x14a4d9)
                    _0x14a4d9();
            }
        }
        ;
    }
    return _0x2961c4['prototype'] = Object['create']($Widget['prototype']),
    _0x2961c4['prototype']['constructor'] = _0x2961c4,
    _0x2961c4;
}()
  , $BannerPrivacy = function() {
    var _0x251ceb = 0xa;
    function _0x3bf89c() {
        $Widget['call'](this),
        this['_className'] = 'BannerPrivacy',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x35c,
            'width': 0x780,
            'height': 0xfa
        },
        this['_node']['style']['opacity'] = 0x0,
        this['_background'] = 'linear-gradient(to\x20bottom,\x20rgba(255,\x20255,\x20255,\x200.95)\x2012%,\x20#fff\x2072%)';
        var _0x52da12 = new $Svg($DataLoader['getInstance']()['getSvgCode']('privacyAsset'));
        _0x52da12['_bounds'] = {
            'top': -0x6b,
            'left': 0x30,
            'width': 0x1ba,
            'height': 0x140
        },
        this['append'](_0x52da12);
        var _0xc9bd = new $Label();
        _0xc9bd['_color'] = '#161928',
        _0xc9bd['_bounds'] = {
            'left': 0x1f9,
            'top': 0x30,
            'width': 0x3bf,
            'height': 0x20
        },
        _0xc9bd['_font'] = '32px\x20PublicSans-Bold',
        _0xc9bd['_letterSpacing'] = -1.07,
        _0xc9bd['_text'] = 'Informativa\x20privacy',
        this['append'](_0xc9bd);
        var _0x53e9c5 = new $MultilineLabel();
        _0x53e9c5['_color'] = '#555555',
        _0x53e9c5['_bounds'] = {
            'left': 0x1f9,
            'top': 0x5c,
            'width': 0x3bf,
            'height': 0x6c
        },
        _0x53e9c5['_font'] = '28px\x20PublicSans-SemiBold',
        _0x53e9c5['_letterSpacing'] = -0.93,
        _0x53e9c5['_rowH'] = 0x24,
        _0x53e9c5['_text'] = 'Ti\x20informiamo\x20che\x20Rai\x20utilizza\x20sistemi\x20di\x20misurazione\x20in\x20modalità\x20anonima\x20e\x20aggregata\x20per\x20la\x20visione\x20dei\x20contenuti\x20sulle\x20tv\x20connesse.\x20Seleziona\x20“Ok,\x20ho\x20capito”\x20per\x20procedere\x20con\x20la\x20visione\x20o\x20“Maggiori\x20Info”\x20per\x20saperne\x20di\x20più.',
        this['append'](_0x53e9c5);
        var _0x4aaee5 = new $Button0();
        _0x4aaee5['_bounds'] = {
            'left': 0x610,
            'top': 0x2b,
            'width': 0x140,
            'height': 0x44
        },
        _0x4aaee5['_text'] = 'Maggiori\x20info',
        _0x4aaee5['_node']['onmouseup'] = function(_0x39516f) {
            var _0x32e6d0 = new Event('keypress');
            _0x32e6d0['keyCode'] = KeyEvent['VK_ENTER'],
            this['_keyListener'](_0x32e6d0);
        }
        ['bind'](this),
        _0x4aaee5['_node']['onmouseenter'] = function(_0x147699) {
            _0x2aaaba['_focused'] = ![],
            _0x4aaee5['_focused'] = !![];
        }
        ['bind'](this),
        this['append'](_0x4aaee5);
        var _0x2aaaba = new $Button0();
        _0x2aaaba['_bounds'] = {
            'left': 0x610,
            'top': 0x8b,
            'width': 0x140,
            'height': 0x44
        },
        _0x2aaaba['_text'] = 'Ok,\x20ho\x20capito',
        _0x2aaaba['_node']['onmouseup'] = function(_0x4077aa) {
            var _0xa4c920 = new Event('keypress');
            _0xa4c920['keyCode'] = KeyEvent['VK_ENTER'],
            this['_keyListener'](_0xa4c920);
        }
        ['bind'](this),
        _0x2aaaba['_node']['onmouseenter'] = function(_0x4354d0) {
            _0x2aaaba['_focused'] = !![],
            _0x4aaee5['_focused'] = ![];
        }
        ['bind'](this),
        this['append'](_0x2aaaba),
        _0x2aaaba['_focused'] = !![];
        function _0x3c9f52(_0x1ea550) {
            _0x48297e && (clearTimeout(_0x48297e),
            _0x48297e = setTimeout(function() {
                this['_visible'] = ![];
            }
            ['bind'](this), 0x1388));
            switch (_0x1ea550['keyCode']) {
            case KeyEvent['VK_UP']:
                _0x2aaaba['_focused'] = ![],
                _0x4aaee5['_focused'] = !![];
                break;
            case KeyEvent['VK_DOWN']:
                _0x2aaaba['_focused'] = !![],
                _0x4aaee5['_focused'] = ![];
                break;
            case KeyEvent['VK_ENTER']:
                var _0x376ff5 = _0x2aaaba['_focused'] ? _0x2aaaba : _0x4aaee5;
                _0x376ff5['click'](function() {
                    if (_0x4aaee5['_focused'])
                        this['_undisplayHandler'] = undefined,
                        $ModalPrivacy['switch2'](this, '');
                    else {
                        $StorageManager['getInstance']()['write'](PRIVACY_FILE, JSON['stringify']({
                            'tracciamento': !![],
                            'profilazione': !![]
                        }));
                        if (!this['_undisplayHandler']) {
                            var _0x27524c = $BannerLancioApp['getInstance']();
                            if (!$Gui['getInstance']()['getChildrenByClassName']('BannerLancioApp'))
                                $Gui['getInstance']()['append'](_0x27524c);
                            _0x27524c['_visible'] = !![];
                        }
                        this['visibleTrigger'](![], $Gui['getInstance']()['remove']['bind'](this, this));
                    }
                }
                ['bind'](this));
                break;
            }
        }
        var _0x5c6937 = undefined;
        this['_node']['addEventListener']('animationend', function(_0x2cadbc) {
            (_0x2cadbc['animationName'] === 'bannerHide' || _0x2cadbc['animationName'] === 'bannerShow') && (_0x5c6937 && (_0x5c6937(),
            _0x5c6937 = undefined));
        }, ![]);
        var _0x48297e = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x57be99) {
                if (_0x57be99 !== this['_visible']) {
                    TRANSITION && (this['_node']['className'] = '',
                    this['_node']['offsetWidth'],
                    this['_node']['className'] = _0x57be99 ? 'bannerShow' : 'bannerHide');
                    this['_top'] = _0x57be99 ? 0x33e : 0x35c,
                    this['_node']['style']['opacity'] = _0x57be99 ? 0x1 : 0x0,
                    this['_node']['style']['zIndex'] = _0x57be99 ? 0x3e8 : -0x3e8;
                    if (_0x57be99)
                        this['_displayCount']++;
                    this['_keyListener'] = _0x57be99 ? _0x3c9f52['bind'](this) : undefined,
                    _0x57be99 ? (_0x48297e = setTimeout(function() {
                        this['_visible'] = ![];
                    }
                    ['bind'](this), _0x251ceb * 0x3e8),
                    $WebTrekk['track']($WebTrekk['events']['PRIVACY'])) : (clearTimeout(_0x48297e),
                    this['_undisplayHandler'] && (this['_undisplayHandler'](),
                    this['_undisplayHandler'] = undefined));
                }
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        Object['defineProperty'](this, '_displayCount', {
            'value': 0x0,
            'writable': !![]
        }),
        Object['defineProperty'](this, '_undisplayHandler', {
            'value': undefined,
            'writable': !![]
        }),
        this['visibleTrigger'] = function(_0x27fb64, _0x78ab14) {
            if (TRANSITION)
                _0x5c6937 = _0x78ab14,
                this['_visible'] = _0x27fb64;
            else {
                if (_0x78ab14)
                    _0x78ab14();
            }
        }
        ;
    }
    return _0x3bf89c['prototype'] = Object['create']($Widget['prototype']),
    _0x3bf89c['prototype']['constructor'] = _0x3bf89c,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x3bf89c()),
            this['instance'];
        }
    };
}()
  , $ModalAudioSubs = function() {
    var _0x4af55e = 0x1
      , _0xb23e01 = 0x2;
    function _0x263291() {
        $Widget['call'](this),
        this['_className'] = 'ModalAudioSubs',
        this['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x29dfb5 = new $Widget();
        _0x29dfb5['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        _0x29dfb5['_node']['style']['opacity'] = 0x0;
        var _0x420317 = new $ButtonBack()
          , _0x2f47da = new $Label();
        _0x2f47da['_color'] = '#fff',
        _0x2f47da['_bounds'] = {
            'left': 0x8e,
            'top': 0x28,
            'width': 0x320,
            'height': 0x28
        },
        _0x2f47da['_font'] = '24px\x20PublicSans-Bold',
        _0x2f47da['_letterSpacing'] = -0.8,
        _0x2f47da['_rowH'] = 0x28;
        var _0xaa9b9a = new $Label();
        _0xaa9b9a['_color'] = '#fff',
        _0xaa9b9a['_bounds'] = {
            'left': 0x8e,
            'top': 0x5e,
            'width': 0x320,
            'height': 0x34
        },
        _0xaa9b9a['_font'] = '52px\x20PublicSans-Regular',
        _0xaa9b9a['_letterSpacing'] = -1.2,
        _0xaa9b9a['_rowH'] = 0x34;
        var _0x567972 = new $Widget();
        _0x567972['_bounds'] = {
            'left': 0x0,
            'top': 0x138,
            'width': 0x71c,
            'height': 0x300
        },
        _0x567972['_node']['style']['opacity'] = 0x0,
        _0x29dfb5['append'](_0x420317),
        _0x29dfb5['append'](_0x2f47da),
        _0x29dfb5['append'](_0xaa9b9a),
        this['append'](_0x29dfb5),
        this['append'](_0x567972);
        var _0x22be2d = 0x0, _0x4ed6ef, _0x42bb8c, _0x44ddf9 = function() {
            var _0x164e03 = _0x567972['_children']['slice'](0x0)
              , _0x452b06 = _0x164e03['pop']();
            while (_0x452b06) {
                _0x567972['remove'](_0x452b06),
                _0x452b06 = _0x164e03['pop']();
            }
            _0x420317['_focused'] = ![];
        }, _0x20e778 = function() {
            _0x22be2d = 0x0,
            this['_visible'] = ![],
            _0x4ed6ef['visibleTrigger'](!![], function() {
                _0x44ddf9();
            }
            ['bind'](this));
        }
        ['bind'](this), _0x4f0e3e = function(_0x3ab7e5) {
            if (!this['_visible'])
                return;
            if (_0x420317['_focused'])
                switch (_0x3ab7e5['keyCode']) {
                case KeyEvent['VK_DOWN']:
                case KeyEvent['VK_RIGHT']:
                    _0x22be2d < _0x567972['_children']['length'] && (_0x420317['_focused'] = ![],
                    _0x567972['_children'][_0x22be2d]['_focused'] = !![]);
                    break;
                case KeyEvent['VK_ENTER']:
                case KeyEvent['VK_BACK']:
                    _0x420317['click'](function() {
                        _0x20e778();
                    });
                    break;
                }
            else {
                var _0x33de46 = _0x567972['_children'][_0x22be2d]['onHandleKey'](_0x3ab7e5);
                if (_0x33de46)
                    switch (_0x3ab7e5['keyCode']) {
                    case KeyEvent['VK_UP']:
                        _0x420317['_focused'] = !![];
                        break;
                    case KeyEvent['VK_LEFT']:
                        _0x567972['_children'][_0x22be2d]['_focused'] = ![];
                        _0x22be2d > 0x0 ? (_0x22be2d -= 0x1,
                        _0x567972['_children'][_0x22be2d]['_focused'] = !![]) : _0x420317['_focused'] = !![];
                        break;
                    case KeyEvent['VK_RIGHT']:
                        _0x22be2d < _0x567972['_children']['length'] - 0x1 && (_0x567972['_children'][_0x22be2d + 0x1]['_enabled'] && (_0x567972['_children'][_0x22be2d]['_focused'] = ![],
                        _0x22be2d += 0x1,
                        _0x567972['_children'][_0x22be2d]['_focused'] = !![]));
                        break;
                    case KeyEvent['VK_ENTER']:
                        var _0x4fc449 = _0x567972['_children'][_0x22be2d];
                        _0x4fc449['_paneid'] === _0xb23e01 && (_0x567972['_children'][_0x22be2d + 0x1]['_enabled'] = !!_0x4fc449['_index']);
                        break;
                    }
                else
                    _0x3ab7e5['keyCode'] === KeyEvent['VK_BACK'] && _0x20e778();
            }
        }
        ['bind'](this);
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x567972['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x3357ef) {
                _0x3357ef !== this['_visible'] && (TRANSITION && (_0x29dfb5['_node']['style']['transition'] = '',
                _0x567972['_node']['style']['transition'] = '',
                _0x567972['_node']['className'] = '',
                this['_node']['offsetWidth'],
                _0x29dfb5['_node']['style']['transition'] = _0x3357ef ? 'opacity\x200.3s' : 'opacity\x200.4s',
                _0x567972['_node']['style']['transition'] = _0x3357ef ? 'opacity\x200.5s' : 'opacity\x200.4s',
                _0x567972['_node']['className'] = _0x3357ef ? 'frontGuideMoveOn' : 'frontGuideMoveOff'),
                _0x29dfb5['_node']['style']['opacity'] = _0x3357ef ? 0x1 : 0x0,
                _0x567972['_node']['style']['opacity'] = _0x3357ef ? 0x1 : 0x0,
                _0x567972['_left'] = _0x3357ef ? 0x1 : -0x1e,
                this['_keyListener'] = _0x3357ef ? _0x4f0e3e : undefined);
            }
        });
        function _0x3b5949(_0x2f8fa0, _0x5011e9) {
            var _0x4529fb = [], _0x3ab94f = 0x8d, _0x27de37, _0x11ce50, _0x236b77, _0x5e91f6, _0x427168 = $StreamingService['getPlayer']();
            _0x5011e9 === undefined && _0x42bb8c && (clearTimeout(_0x42bb8c),
            _0x42bb8c = null);
            _0x27de37 = $SubtitleService['isEnabled']() && _0x2f8fa0['subtitles'] === 'true' ? 0x1 : 0x0;
            if (_0x427168)
                _0x5e91f6 = _0x427168['getAudioTracks'](),
                _0x5e91f6 && _0x5e91f6['length'] > _0x27de37 && _0x4529fb['push']({
                    'id': _0x4af55e,
                    'title': 'Audio',
                    'tracks': _0x5e91f6,
                    'color': _0x2f8fa0['color'],
                    'w': 0x1cb,
                    'enabled': !![],
                    'onSelection': function(_0x1804f8) {
                        _0x427168['setAudioTrack'](_0x1804f8);
                    }
                });
            else {
                _0x5e91f6 = $VideoManager['getInstance']()['_tracks'];
                if (_0x5e91f6 && _0x5e91f6['length'] > _0x27de37)
                    _0x4529fb['push']({
                        'id': _0x4af55e,
                        'title': 'Audio',
                        'tracks': _0x14613d(_0x5e91f6),
                        'color': _0x2f8fa0['color'],
                        'w': 0x1cb,
                        'enabled': !![],
                        'labels': _0x2f8fa0['audioLabels'] && _0x2f8fa0['audioLabels']['split'](','),
                        'isSelected': function(_0x3aa246, _0x8f13ea) {
                            return _0x8f13ea = _0x8f13ea || $VideoManager['getInstance']()['_currentTrack'],
                            _0x8f13ea && _0x8f13ea['language'] === _0x3aa246['language'] && _0x3aa246['pid'] === _0x8f13ea['pid'];
                        },
                        'onSelection': function(_0x4e5b07) {
                            $VideoManager['getInstance']()['trackSwitch'](_0x4e5b07);
                        }
                    });
                else {
                    if (!_0x5e91f6 || _0x5e91f6['length'] === 0x0) {
                        println('[AUDIO]\x20empty\x20track\x20list', 'wrn'),
                        _0x5011e9 = _0x5011e9 || 0x0;
                        if (_0x5011e9 < 0x2) {
                            _0x42bb8c = setTimeout(function(_0x3fb90f) {
                                _0x42bb8c = null,
                                _0x3b5949(_0x2f8fa0, _0x3fb90f);
                            }, 0x1f4, _0x5011e9 + 0x1);
                            return;
                        }
                    }
                }
            }
            _0x27de37 ? (_0xaa9b9a['_text'] = _0x5e91f6 && _0x5e91f6['length'] > _0x27de37 ? 'Audio\x20e\x20sottotitoli' : 'Sottotitoli',
            _0x4529fb['push']({
                'id': _0xb23e01,
                'title': 'Sottotitoli',
                'tracks': $SubtitleService['getSetting']('languages'),
                'color': _0x2f8fa0['color'],
                'w': 0x16e,
                'enabled': !![],
                'isSelected': function(_0x13a9d9, _0x187e84, _0x3c3a83) {
                    return _0x3c3a83 === $SubtitleService['getSetting']('active');
                },
                'onSelection': function(_0x26bea5, _0x57afec) {
                    if (_0x57afec === 0x0)
                        $SubtitleService['stop']();
                    else {
                        if (_0x57afec === 0x1)
                            $SubtitleService['start'](0x1);
                    }
                    $SubtitleService['save']();
                }
            }),
            _0x4529fb['push']({
                'title': 'Dimensione',
                'tracks': $SubtitleService['getSetting']('labels'),
                'fontSize': $SubtitleService['getSetting']('fontSizes'),
                'color': _0x2f8fa0['color'],
                'w': 0xbe,
                'enabled': !!$SubtitleService['getSetting']('active'),
                'isSelected': function(_0x5f4830, _0x521f66, _0xba5672) {
                    return _0xba5672 === $SubtitleService['getSetting']('fontSize');
                },
                'onSelection': function(_0x5cd79c, _0x1c756d) {
                    $SubtitleService['setSetting']('fontSize', _0x1c756d);
                }
            })) : _0xaa9b9a['_text'] = 'Audio';
            for (_0x11ce50 = 0x0; _0x11ce50 < _0x4529fb['length']; _0x11ce50++) {
                _0x236b77 = new _0x3bb485(_0x4529fb[_0x11ce50]),
                _0x236b77['_left'] = _0x3ab94f,
                _0x236b77['_enabled'] = _0x4529fb[_0x11ce50]['enabled'],
                _0x3ab94f += _0x4529fb[_0x11ce50]['w'],
                _0x567972['append'](_0x236b77);
            }
            _0x22be2d = 0x0,
            _0x567972['_children']['length'] ? (_0x420317['_focused'] = ![],
            _0x567972['_children'][_0x22be2d]['_focused'] = !![]) : _0x420317['_focused'] = !![];
        }
        Object['defineProperty'](this, '_epg', {
            'set': function(_0x56e8a2) {
                var _0x44bc57 = 'rgba(' + parseInt(_0x56e8a2['color']['substring'](0x1, 0x3), 0x10) + ',\x20' + parseInt(_0x56e8a2['color']['substring'](0x3, 0x5), 0x10) + ',\x20' + parseInt(_0x56e8a2['color']['substring'](0x5, 0x7), 0x10) + ',\x20' + '0.95)';
                _0x29dfb5['_background'] = 'linear-gradient(to\x20bottom,\x20' + _0x44bc57 + ',\x20' + _0x56e8a2['color'] + '\x2056%)',
                _0x420317['_focusedColor'] = _0x56e8a2['color'],
                _0x2f47da['_text'] = _0x56e8a2['name'],
                _0xaa9b9a['_text'] = '',
                _0x3b5949(_0x56e8a2);
            }
        }),
        Object['defineProperty'](this, '_backScene', {
            'set': function(_0x47e8b6) {
                _0x4ed6ef = _0x47e8b6;
            }
        }),
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](function(_0x227efc) {
            this['_visible'] && (_0x44ddf9(),
            this['_epg'] = EPG['getEpg'](_0x227efc));
        }
        ['bind'](this)),
        $VideoManager['getInstance']()['addSelectedComponentChangeListener'](function(_0x532a8f, _0x40bc32) {
            if (_0x532a8f === _0x4af55e || _0x532a8f === _0xb23e01)
                for (var _0x276cd9 = 0x0; _0x276cd9 < _0x567972['_children']['length']; _0x276cd9++) {
                    if (_0x567972['_children'][_0x276cd9]['_paneid'] === _0x532a8f) {
                        _0x567972['_children'][_0x276cd9]['_option'] = _0x40bc32;
                        return;
                    }
                }
        });
    }
    _0x263291['prototype'] = Object['create']($Widget['prototype']),
    _0x263291['prototype']['constructor'] = _0x263291;
    function _0x3bb485(_0x235171) {
        $Widget['call'](this),
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x235171['w'],
            'height': 0x300
        },
        this['_className'] = _0x235171['title'] + 'Pane',
        this['_paneid'] = _0x235171['id'];
        var _0x5da86e = new $Label();
        _0x5da86e['_color'] = '#fff',
        _0x5da86e['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x235171['w'],
            'height': 0x34
        },
        _0x5da86e['_font'] = '36px\x20PublicSans-Bold';
        var _0x5ac670 = new $Widget()
          , _0x155987 = 0x0
          , _0xb373c2 = !![];
        if (_0x235171['labels'] && _0x235171['labels']['length'] !== _0x235171['tracks']['length'])
            _0x235171['labels'] = null;
        for (var _0x2cb344 = 0x0, _0x33e307, _0x57d84c = 0x0, _0x184e69; _0x2cb344 < _0x235171['tracks']['length']; _0x2cb344++) {
            if (!_0x235171['tracks'][_0x2cb344])
                continue;
            if (_0x235171['id'] === _0x4af55e)
                _0x33e307 = _0x235171['labels'] ? _0x235171['labels'][_0x2cb344] : $VideoManager['getInstance']()['toDisplayLanguage'](_0x235171['tracks'][_0x2cb344]['language']);
            else
                _0x33e307 = _0x235171['tracks'][_0x2cb344];
            _0x184e69 = new _0x358490(_0x33e307,_0x57d84c,(_0x235171['fontSize'] && _0x235171['fontSize'][_0x2cb344] || 0x18) + 'px\x20PublicSans-Bold',_0x235171['color']),
            _0x184e69['_selected'] = _0x235171['isSelected'] ? _0x235171['isSelected'](_0x235171['tracks'][_0x2cb344], null, _0x2cb344) : _0x235171['tracks'][_0x2cb344]['enabled'],
            _0x184e69['_selected'] && (_0x155987 = _0x2cb344),
            _0x5ac670['append'](_0x184e69),
            _0x57d84c += 0x5e;
        }
        _0x5ac670['_bounds'] = {
            'left': 0x0,
            'top': 0x70,
            'width': _0x235171['w'],
            'height': _0x57d84c
        },
        _0x5da86e['_letterSpacing'] = -1.17,
        _0x5da86e['_rowH'] = 0x30,
        _0x5da86e['_text'] = _0x235171['title'],
        this['append'](_0x5da86e),
        this['append'](_0x5ac670),
        Object['defineProperty'](this, '_option', {
            'set': function(_0x3484fd) {
                for (var _0x433e17 = 0x0; _0x433e17 < _0x235171['tracks']['length']; _0x433e17++) {
                    if (_0x235171['isSelected']) {
                        if (_0x235171['isSelected'](_0x235171['tracks'][_0x433e17], _0x3484fd, _0x433e17)) {
                            for (var _0x4c09d0 = 0x0; _0x4c09d0 < _0x5ac670['_children']['length']; _0x4c09d0++) {
                                _0x5ac670['_children'][_0x4c09d0]['_selected'] = _0x4c09d0 === _0x433e17;
                                if (this['_focused'])
                                    _0x5ac670['_children'][_0x4c09d0]['_focused'] = _0x4c09d0 === _0x433e17;
                                if (_0x433e17 === _0x4c09d0)
                                    _0x155987 = _0x4c09d0;
                            }
                            break;
                        }
                    } else {
                        var _0x5d6f3a = _0x235171['tracks'][_0x433e17]['id'] === _0x3484fd['id'];
                        _0x5ac670['_children'][_0x433e17]['_selected'] = _0x5d6f3a,
                        _0x5ac670['_children'][_0x433e17]['_focused'] = _0x5d6f3a;
                        if (_0x5d6f3a)
                            _0x155987 = _0x433e17;
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_index', {
            'get': function() {
                return _0x155987;
            }
        }),
        Object['defineProperty'](this, '_enabled', {
            'get': function() {
                return _0xb373c2;
            },
            'set': function(_0x4f0f0a) {
                if (_0xb373c2 !== _0x4f0f0a) {
                    _0xb373c2 = _0x4f0f0a,
                    _0x5da86e['_color'] = _0x4f0f0a ? '#fff' : 'rgba(255,255,255,0.3)';
                    for (var _0x273dc5 = 0x0; _0x273dc5 < _0x5ac670['_children']['length']; _0x273dc5++) {
                        _0x5ac670['_children'][_0x273dc5]['_enabled'] = _0x4f0f0a;
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'set': function(_0x24fb14) {
                if (_0xb373c2)
                    _0x5ac670['_children'][_0x155987]['_focused'] = _0x24fb14;
            }
        }),
        this['onHandleKey'] = function(_0x5019ac) {
            switch (_0x5019ac['keyCode']) {
            case KeyEvent['VK_UP']:
                _0x5ac670['_children'][_0x155987]['_focused'] = ![];
                if (_0x155987 < 0x1)
                    return !![];
                _0x155987 -= 0x1,
                _0x5ac670['_children'][_0x155987]['_focused'] = !![];
                break;
            case KeyEvent['VK_DOWN']:
                _0x155987 < _0x5ac670['_children']['length'] - 0x1 && (_0x5ac670['_children'][_0x155987]['_focused'] = ![],
                _0x155987 += 0x1,
                _0x5ac670['_children'][_0x155987]['_focused'] = !![]);
                break;
            case KeyEvent['VK_LEFT']:
            case KeyEvent['VK_RIGHT']:
                return !![];
            case KeyEvent['VK_ENTER']:
                _0x5ac670['_children'][_0x155987]['click'](function() {
                    for (var _0x52e443 = 0x0; _0x52e443 < _0x5ac670['_children']['length']; _0x52e443++) {
                        _0x5ac670['_children'][_0x52e443]['_selected'] = _0x52e443 === _0x155987;
                    }
                    _0x235171['onSelection'](_0x235171['tracks'][_0x155987], _0x155987);
                });
                return !![];
            }
        }
        ;
    }
    _0x3bb485['prototype'] = Object['create']($Widget['prototype']),
    _0x3bb485['prototype']['constructor'] = _0x3bb485;
    function _0x358490(_0xd44ef4, _0xcc1377, _0x4e5e80, _0x12a9ad) {
        $Widget['call'](this);
        var _0x402d77 = _0xd44ef4['width'](_0x4e5e80, -0.8) + 0x43, _0x992b48 = ![], _0x226ba9 = ![], _0x195a40;
        this['_bounds'] = {
            'left': 0x0,
            'top': _0xcc1377,
            'width': _0x402d77,
            'height': 0x3e
        };
        var _0x222d17 = new $Widget();
        _0x222d17['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x402d77,
            'height': 0x3e
        },
        _0x222d17['_background'] = '#fff',
        _0x222d17['_cornerR'] = 0x2,
        _0x222d17['_node']['style']['opacity'] = 0x0,
        _0x222d17['_node']['addEventListener']('animationend', function() {
            _0x195a40 && (_0x195a40(),
            _0x195a40 = undefined);
        }, ![]);
        var _0x4a3882 = new $Widget();
        _0x4a3882['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x402d77,
            'height': 0x3e
        },
        _0x4a3882['_cornerR'] = 0x2,
        _0x4a3882['_node']['style']['boxSizing'] = 'border-box',
        _0x4a3882['_node']['style']['opacity'] = 0x0,
        _0x4a3882['_node']['style']['border'] = 'solid\x203px\x20#fff';
        var _0x2feb28 = new $Widget('<div>' + _0xd44ef4 + '</div>');
        _0x2feb28['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x402d77,
            'height': 0x3e
        },
        _0x2feb28['_node']['style']['font'] = _0x4e5e80,
        _0x2feb28['_node']['style']['lineHeight'] = '62px',
        _0x2feb28['_node']['style']['textAlign'] = 'center',
        _0x2feb28['_color'] = '#fff',
        this['append'](_0x4a3882),
        this['append'](_0x222d17),
        this['append'](_0x2feb28),
        Object['defineProperty'](this, '_selected', {
            'get': function() {
                return _0x992b48;
            },
            'set': function(_0x36fb57) {
                _0x992b48 !== _0x36fb57 && (_0x992b48 = _0x36fb57,
                TRANSITION && (_0x4a3882['_node']['className'] = '',
                _0x4a3882['_node']['offsetWidth'],
                _0x4a3882['_node']['className'] = _0x36fb57 ? 'buttonInOndaFocusOn' : 'buttonInOndaFocusOff'),
                _0x4a3882['_node']['style']['opacity'] = _0x36fb57 ? 0x1 : 0x0);
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'get': function() {
                return _0x226ba9;
            },
            'set': function(_0x1a9062) {
                _0x226ba9 !== _0x1a9062 && (_0x226ba9 = _0x1a9062,
                TRANSITION && (_0x222d17['_node']['className'] = '',
                _0x222d17['_node']['offsetWidth'],
                _0x222d17['_node']['className'] = _0x1a9062 ? 'buttonInOndaFocusOn' : 'buttonInOndaFocusOff'),
                _0x222d17['_node']['style']['opacity'] = _0x1a9062 ? 0x1 : 0x0,
                _0x2feb28['_color'] = _0x1a9062 ? _0x12a9ad : '#fff');
            }
        }),
        Object['defineProperty'](this, '_enabled', {
            'set': function(_0x22fea2) {
                _0x2feb28['_color'] = _0x22fea2 ? '#fff' : 'rgba(255,255,255,0.3)';
                if (_0x992b48)
                    _0x4a3882['_node']['style']['border'] = 'solid\x203px\x20' + (_0x22fea2 ? '#fff' : 'rgba(255,255,255,0.3)');
            }
        }),
        this['click'] = function(_0x34e3ad) {
            if (TRANSITION)
                _0x195a40 = _0x34e3ad,
                _0x222d17['_node']['className'] = '',
                _0x222d17['_node']['offsetWidth'],
                _0x222d17['_node']['className'] = 'click';
            else {
                if (_0x34e3ad)
                    _0x34e3ad();
            }
        }
        ;
    }
    _0x358490['prototype'] = Object['create']($Widget['prototype']),
    _0x358490['prototype']['constructor'] = _0x358490;
    function _0x14613d(_0x447d61) {
        var _0x2267c1 = [];
        for (var _0x3d138e = 0x0; _0x3d138e < _0x447d61['length']; _0x3d138e++) {
            _0x2267c1['push'](_0x447d61[_0x3d138e]);
        }
        return _0x2267c1['sort'](function(_0x1a0b9a, _0x8b8b58) {
            if (_0x1a0b9a['pid'] > _0x8b8b58['pid'])
                return 0x1;
            if (_0x1a0b9a['pid'] < _0x8b8b58['pid'])
                return -0x1;
            return 0x0;
        });
    }
    return {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x263291()),
            this['instance'];
        },
        'switch2': function(_0x23a6ec) {
            var _0x14e144 = $ModalAudioSubs['getInstance']();
            _0x14e144['_epg'] = EPG['getEpg'](),
            _0x14e144['_backScene'] = _0x23a6ec;
            if (!$Gui['getInstance']()['getChildrenByClassName']('ModalAudioSubs'))
                $Gui['getInstance']()['append'](_0x14e144);
            _0x23a6ec['visibleTrigger'](![], function() {
                _0x14e144['_visible'] = !![];
            });
        }
    };
}()
  , $ModalPrivacy = function() {
    var _0x3d114c = {
        'date': '2022-03-28',
        'title': 'Informativa\x20sul\x20Trattamento\x20dei\x20dati\x20personali\x20ai\x20sensi\x20dell\x27art.\x2013\x20del\x20Regolamento\x20(UE)\x202016/679\x20(RGPD)',
        'body': '<div\x20class=\x27privacy-content\x27><br/><br/><strong>INTRODUZIONE</strong><br/>Il\x20presente\x20documento\x20è\x20parte\x20dell’informativa\x20resa\x20ai\x20sensi\x20dell&#39;art.\x2013\x20del\x20Regolamento\x20(UE)\x202016/679\x20del\x20Parlamento\x20Europeo\x20e\x20del\x20Consiglio,\x20del\x2027\x20aprile\x202016,\x20relativo\x20alla\x20protezione\x20delle\x20persone\x20fisiche\x20con\x20riguardo\x20al\x20trattamento\x20dei\x20dati\x20personali,\x20nonché\x20alla\x20libera\x20circolazione\x20di\x20tali\x20dati\x20(“Regolamento”),\x20del\x20Decreto\x20Legislativo\x20n.\x20196\x20del\x202003\x20come\x20novellato\x20dal\x20Decreto\x20Legislativo\x20n.\x20101\x20del\x2010\x20agosto\x202018\x20(“Codice\x20Privacy”)\x20e\x20delle\x20ulteriori\x20norme\x20applicabili\x20in\x20tema\x20di\x20protezione\x20dei\x20dati\x20personali.<br/><br/>Ai\x20fini\x20della\x20presente\x20informativa,\x20il\x20Titolare\x20del\x20Trattamento\x20è:\x20La\x20Rai\x20-\x20Radiotelevisione\x20Italiana\x20Spa,\x20in\x20qualità\x20di\x20titolare\x20del\x20trattamento\x20(con\x20sede\x20in\x20Viale\x20Mazzini\x2014\x20–\x2000195,\x20Roma,\x20PEC:\x20<span\x20class=\x22yellow\x22>raispa@postacertificata.rai.it</span>,\x20Centralino:\x2006\x2038781).<br/><br/>Questa\x20informativa\x20si\x20riferisce\x20allo\x20scambio\x20di\x20dati\x20che\x20avviene\x20tra\x20i\x20televisori\x20di\x20ultima\x20generazione\x20collegati\x20ad\x20Internet\x20con\x20servizi\x20HbbTV\x20attivati\x20(c.d.\x20Smart\x20tv)\x20e\x20Rai\x20quando\x20l’apparecchio\x20tv\x20viene\x20sintonizzato\x20su\x20di\x20un\x20canale\x20dell’emittente\x20Rai\x20(esempio:\x20Rai\x201,\x20Rai\x202,\x20Rai\x203,\x20Rai\x20Movie,\x20etc).<br/><br/><br/><br/><strong>TIPOLOGIA\x20E\x20FINALITÀ\x20DEI\x20DATI\x20TRATTATI</strong><br/>I\x20sistemi\x20informatici\x20e\x20le\x20procedure\x20software\x20preposte\x20al\x20funzionamento\x20dei\x20sistemi\x20per\x20l’interazione\x20del\x20tuo\x20smart\x20tv\x20acquisiscono,\x20nel\x20corso\x20del\x20loro\x20normale\x20esercizio,\x20alcuni\x20dati\x20personali\x20di\x20tipo\x20tecnico\x20la\x20cui\x20trasmissione\x20è\x20implicita\x20nell&#39;uso\x20dei\x20protocolli\x20di\x20comunicazione\x20di\x20Internet.\x20Tali\x20dati\x20sono\x20necessari\x20per\x20poter\x20erogare\x20e\x20controllare\x20il\x20corretto\x20funzionamento\x20dei\x20servizi\x20offerti.<br/><br/>Quando\x20uno\x20Smart\x20tv\x20è\x20sintonizzato\x20su\x20un\x20canale\x20dell’emittente\x20Rai\x20sono\x20altresì\x20raccolti\x20da\x20Rai\x20i\x20dati\x20di\x20fruizione\x20(canale\x20visualizzato,\x20data\x20e\x20ora\x20di\x20fruizione)\x20e\x20dati\x20personali\x20di\x20tipo\x20tecnico\x20(indirizzo\x20IP,\x20identificativo\x20dinamico\x20di\x20Rai\x20Tv+\x20sul\x20dispositivo).\x20Tali\x20dati\x20sono\x20esclusivamente\x20utilizzati\x20per\x20raccogliere\x20informazioni,\x20in\x20forma\x20aggregata\x20e\x20anonima,\x20al\x20fine\x20di\x20effettuare\x20delle\x20analisi\x20statistiche\x20sul\x20numero\x20dei\x20telespettatori\x20(nel\x20proseguo\x20Utente/i)\x20che\x20hanno\x20visualizzato\x20un\x20determinato\x20programma\x20televisivo.\x20Pertanto,\x20la\x20finalità\x20del\x20trattamento\x20è\x20la\x20rilevazione\x20degli\x20ascolti.<br/><br/>In\x20particolare,\x20il\x20processo\x20prevede\x20che\x20l’IP\x20venga\x20anonimizzato\x20troncando\x20le\x20ultime\x20tre\x20cifre\x20e\x20che\x20l’identificativo\x20di\x20Rai\x20Tv+\x20sul\x20dispositivo\x20sia\x20generato\x20dinamicamente\x20tramite\x20una\x20funzione\x20di\x20codifica\x20realizzata\x20da\x20Rai\x20che\x20non\x20consente\x20di\x20risalire\x20al\x20dispositivo\x20stesso.\x20I\x20dati,\x20così\x20anonimizzati\x20e\x20non\x20più\x20riconducibili\x20all’Utente,\x20sono\x20memorizzati\x20per\x20misurare\x20il\x20numero\x20di\x20volte\x20in\x20cui\x20l’apparecchio\x20TV\x20è\x20stato\x20sintonizzato\x20su\x20un\x20canale\x20Rai\x20e\x20quindi\x20su\x20uno\x20specifico\x20programma.\x20Il\x20programma\x20visto\x20dall’Utente\x20è\x20identificato,\x20sullo\x20schema\x20cronologico\x20delle\x20trasmissioni\x20televisive\x20(c.d.\x20Palinsesto),\x20per\x20mezzo\x20dei\x20dati\x20di\x20fruizione\x20“Canale”\x20e\x20“Data\x20e\x20ora”.\x20L’analisi\x20dei\x20dati\x20di\x20fruizione\x20permette\x20di\x20dedurre\x20comportamenti\x20di\x20visione\x20di\x20tutti\x20gli\x20utenti\x20di\x20un\x20singolo\x20canale\x20(e\x20non\x20di\x20un\x20singolo\x20utente).<br/><br/>I\x20dati\x20raccolti\x20potranno\x20essere\x20trattati\x20anche\x20per\x20adempiere\x20agli\x20obblighi\x20previsti\x20da\x20leggi,\x20regolamenti\x20o\x20normative\x20comunitarie\x20nonché\x20da\x20disposizioni\x20delle\x20Autorità\x20di\x20vigilanza\x20di\x20settore.<br/><br/><strong>DESTINATARI\x20DEI\x20DATI\x20TRATTATI</strong><br/><br/>I\x20dati\x20personali\x20tecnici\x20forniti\x20come\x20sopra\x20indicato,\x20potranno\x20essere\x20comunicati\x20ad\x20eventuali\x20soggetti\x20che\x20forniscano\x20a\x20RAI\x20prestazioni\x20o\x20servizi\x20strumentali\x20alla\x20finalità\x20sopra\x20indicata\x20quali,\x20a\x20mero\x20titolo\x20esemplificativo,\x20società\x20controllate,\x20partecipate\x20e/o\x20collegate\x20a\x20RAI;\x20soggetti,\x20enti\x20e/o\x20società\x20che\x20gestiscono\x20e/o\x20partecipano\x20alla\x20gestione\x20e/o\x20alla\x20manutenzione\x20degli\x20strumenti\x20elettronici\x20e/o\x20telematici\x20utilizzati,\x20fornitori,\x20appaltatori,\x20subappaltatori,\x20designati\x20dalla\x20Rai,\x20ai\x20sensi\x20dell’art.\x2028\x20del\x20RGPD,\x20Responsabili\x20del\x20trattamento.<br/><br/>I\x20dati\x20raccolti\x20sono,\x20inoltre,\x20trattati\x20da\x20personale\x20Rai\x20autorizzato\x20al\x20trattamento\x20che\x20opera\x20sulla\x20base\x20di\x20specifiche\x20istruzioni\x20fornite\x20in\x20merito\x20a\x20finalità\x20e\x20modalità\x20del\x20trattamento.\x20Ad\x20eccezione\x20di\x20queste\x20ipotesi,\x20i\x20dati\x20personali\x20non\x20saranno\x20comunicati\x20a\x20terzi,\x20se\x20non\x20nei\x20casi\x20specificamente\x20previsti\x20dalla\x20normativa\x20nazionale\x20e\x20dell’Unione\x20Europea.<br/><br/><br/><strong>BASE\x20GIURIDICA</strong><br/><br/>Rai\x20utilizza\x20i\x20dati\x20in\x20forma\x20aggregata\x20e\x20anonima\x20pertanto\x20non\x20è\x20necessario\x20un\x20consenso\x20preventivo\x20per\x20attivare\x20tale\x20raccolta.<br/><br/><br/><strong>LUOGO\x20DI\x20CONSERVAZIONE</strong><br/><br/>I\x20Dati\x20Personali\x20dell’Utente\x20saranno\x20trattati\x20da\x20Rai\x20principalmente\x20in\x20Italia\x20o,\x20comunque,\x20all’interno\x20dello\x20Spazio\x20Economico\x20Europeo.<br/><br/><br/><strong>PERIODO\x20DI\x20CONSERVAZIONE\x20DEI\x20DATI\x20PERSONALI</strong><br/><br/>I\x20dati\x20saranno\x20conservati\x20limitatamente\x20al\x20tempo\x20necessario\x20per\x20perseguire\x20le\x20finalità\x20di\x20trattamento\x20elencate\x20nella\x20sezione\x20“Tipologia\x20e\x20finalità\x20dei\x20dati\x20trattati”\x20del\x20presente\x20documento,\x20fermo\x20restando\x20il\x20periodo\x20di\x20tempo\x20eventualmente\x20previsto\x20dalle\x20relative\x20normative\x20di\x20settore.\x20I\x20dati\x20personali\x20forniti,\x20inoltre,\x20saranno\x20conservati\x20per\x20il\x20tempo\x20necessario\x20per\x20la\x20gestione\x20di\x20eventuali\x20reclami\x20o\x20contenziosi,\x20legali,\x20fiscali,\x20gestionali\x20e/o\x20di\x20difesa\x20dei\x20diritti\x20di\x20RAI\x20e/o\x20del\x20Gruppo\x20Societario.<br/><br/><strong>DIRITTI\x20DEGLI\x20INTERESSATI</strong><br/>Lei\x20ha\x20il\x20diritto\x20di\x20chiedere\x20al\x20Titolare\x20del\x20trattamento\x20l’accesso\x20ai\x20dati\x20personali\x20e\x20la\x20rettifica\x20o\x20la\x20cancellazione\x20degli\x20stessi\x20o\x20la\x20limitazione\x20del\x20trattamento\x20che\x20La\x20riguarda\x20o\x20di\x20OPPORSI\x20al\x20trattamento\x20medesimo\x20(artt.\x2015\x20e\x20ss.\x20del\x20RGPD).\x20La\x20relativa\x20istanza\x20alla\x20Rai\x20è\x20presentata\x20con\x20le\x20seguenti\x20alternative\x20modalità:<ul>\x09<li>inviando\x20una\x20e-mail\x20all&#39;indirizzo:\x20<span\x20class=\x22yellow\x22>privacy@rai.it</span>;</li>\x09<li>inviando\x20una\x20richiesta\x20scritta\x20all&#39;indirizzo\x20di\x20posta,\x20Rai,\x20Viale\x20Mazzini\x2014,\x2000195\x20Roma,\x20all&#39;att.ne\x20della\x20Struttura\x20Coordinamento\x20Privacy.</li></ul><br/>Ricordiamo\x20infine\x20che\x20i\x20dati\x20trattati\x20in\x20questa\x20sede\x20sono\x20di\x20natura\x20puramente\x20tecnica,\x20non\x20prevedono\x20quindi\x20una\x20raccolta\x20del\x20consenso\x20né\x20una\x20revoca\x20(opt\x20out).<br/><br/>Ricorrendone\x20i\x20presupposti,\x20Lei\x20potrà\x20inoltre\x20proporre\x20reclamo\x20al\x20Garante\x20per\x20la\x20protezione\x20dei\x20dati\x20personali\x20(artt.\x2077\x20ss.\x20del\x20Regolamento).<br/><br/>Le\x20segnaliamo,\x20infine,\x20che\x20potrà\x20consultare\x20queste\x20informazioni\x20ogni\x20volta\x20che\x20lo\x20vorrà,\x20accedendo\x20a\x20Rai\x20Tv+\x20/\x20Supporto\x20e\x20Impostazioni\x20/\x20Informativa\x20Privacy,\x20oppure\x20accedendo\x20al\x20link\x20<span\x20class=\x22yellow\x22><strong>www.rai.it/privacy-tv</strong>\x20</span>o\x20inquadrando\x20questo\x20QR\x20con\x20il\x20suo\x20smartphone.</div>'
    };
    function _0x363f75() {
        $Widget['call'](this),
        this['_className'] = 'ModalPrivacy',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x1582de = ![], _0x49705a, _0x3acf53 = function() {
            if (_0x4fd754['_useBright']) {
                var _0x24d077 = $BannerLancioApp['getInstance']();
                if (!$Gui['getInstance']()['getChildrenByClassName']('BannerLancioApp'))
                    $Gui['getInstance']()['append'](_0x24d077);
                this['visibleTrigger'](![], function() {
                    _0x24d077['_visible'] = !![];
                });
            } else
                this['visibleTrigger'](![], function() {
                    $Scene0['getInstance']()['visibleTrigger'](!![]);
                }
                ['bind'](this));
        }
        ['bind'](this), _0x2e77bc = function() {
            $StorageManager['getInstance']()['write'](PRIVACY_FILE, JSON['stringify']({
                'tracciamento': !![],
                'profilazione': !![]
            })),
            _0x3acf53();
        }
        ['bind'](this), _0x34911a = function(_0x141e67) {
            var _0x22e85e;
            if (_0x4fd754['_focused']) {
                _0x22e85e = _0x4fd754['onHandleKey'](_0x141e67);
                if (_0x22e85e) {
                    if (_0x141e67['keyCode'] === KeyEvent['VK_LEFT'] || _0x141e67['keyCode'] === KeyEvent['VK_BACK'])
                        _0x4fd754['_focused'] = ![],
                        _0x59a51a['_focused'] = !![];
                    else
                        _0x2eafb7['_visible'] && (_0x141e67['keyCode'] === KeyEvent['VK_RIGHT'] || _0x141e67['keyCode'] === KeyEvent['VK_ENTER']) && (_0x4fd754['_focused'] = ![],
                        _0x2eafb7['_focused'] = !![]);
                }
            } else {
                if (_0x59a51a['_focused']) {
                    if (_0x141e67['keyCode'] === KeyEvent['VK_RIGHT'])
                        _0x59a51a['_focused'] = ![],
                        _0x4fd754['_focused'] = !![];
                    else
                        (_0x141e67['keyCode'] === KeyEvent['VK_ENTER'] || _0x141e67['keyCode'] === KeyEvent['VK_BACK']) && _0x59a51a['click'](function() {
                            _0x3acf53();
                        });
                } else {
                    if (_0x2eafb7['_focused']) {
                        if (_0x141e67['keyCode'] === KeyEvent['VK_LEFT'])
                            _0x2eafb7['_focused'] = ![],
                            _0x4fd754['_focused'] = !![];
                        else
                            _0x141e67['keyCode'] === KeyEvent['VK_ENTER'] && _0x2eafb7['click'](function() {
                                _0x2e77bc();
                            });
                    }
                }
            }
        }
        ['bind'](this), _0x59a51a, _0xd17556, _0x406937, _0x317dd1, _0x1cc6cb, _0x4fd754, _0x2eafb7, _0x5d58ca;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x1582de;
            },
            'set': function(_0xf23b55) {
                _0x1582de !== _0xf23b55 && (_0x1582de = _0xf23b55,
                TRANSITION && (_0xd17556['_node']['style']['transition'] = '',
                _0x406937['_node']['style']['transition'] = '',
                _0x406937['_node']['className'] = '',
                this['_node']['offsetWidth'],
                _0xd17556['_node']['style']['transition'] = _0xf23b55 ? 'opacity\x200.3s' : 'opacity\x200.4s',
                _0x406937['_node']['style']['transition'] = _0xf23b55 ? 'opacity\x200.5s' : 'opacity\x200.4s',
                _0x406937['_node']['className'] = _0xf23b55 ? 'frontGuideMoveOn' : 'frontGuideMoveOff'),
                _0xd17556['_node']['style']['opacity'] = _0xf23b55 ? 0x1 : 0x0,
                _0x406937['_node']['style']['opacity'] = _0xf23b55 ? 0x1 : 0x0,
                _0x406937['_left'] = _0xf23b55 ? 0x1 : -0x1e,
                this['_keyListener'] = _0xf23b55 ? _0x34911a : undefined,
                _0x59a51a['_focused'] = ![],
                _0x4fd754['_focused'] = _0xf23b55);
            }
        }),
        Object['defineProperty'](this, '_mode', {
            'set': function(_0x3537f2) {
                _0x3537f2 === 'support' ? (_0x59a51a['_focusedColor'] = '#000099',
                _0x59a51a['_focusedBackground'] = '#ffffff',
                _0x317dd1['_visible'] = !![],
                _0x2eafb7['_visible'] = ![],
                _0x4fd754['_useBright'] = ![],
                _0x1cc6cb['_color'] = _0x5d58ca['_color'] = '#ffffff',
                _0xd17556['_background'] = 'linear-gradient(to\x20bottom,\x20rgba(0,\x200,\x2092,\x200.95),\x20#00005c\x2056%)') : (_0x59a51a['_unfocusedColor'] = '#999999',
                _0x59a51a['_focusedColor'] = '#ffffff',
                _0x59a51a['_focusedBackground'] = '#000099',
                _0x317dd1['_visible'] = ![],
                _0x2eafb7['_visible'] = !![],
                _0x4fd754['_useBright'] = !![],
                _0x1cc6cb['_color'] = '#555555',
                _0x5d58ca['_color'] = '#2e3b42',
                _0xd17556['_background'] = 'linear-gradient(to\x20bottom,\x20rgba(245,\x20245,\x20245,\x200.95),\x20#f5f5f5\x2056%)');
            }
        }),
        this['visibleTrigger'] = function(_0x39aec0, _0x491edb) {
            if (TRANSITION)
                _0x49705a = _0x491edb,
                this['_visible'] = _0x39aec0;
            else
                _0x491edb && (this['_visible'] = _0x39aec0,
                _0x491edb());
        }
        ,
        _0xd17556 = new $Widget(),
        _0xd17556['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        _0xd17556['_node']['style']['opacity'] = 0x0,
        _0x406937 = new $Widget(),
        _0x406937['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        _0x406937['_node']['style']['opacity'] = 0x0,
        _0x406937['_node']['addEventListener']('animationend', function() {
            _0x49705a && (_0x49705a(),
            _0x49705a = undefined);
        }, ![]),
        _0x59a51a = new $ButtonBack(),
        _0x317dd1 = new $Label(),
        _0x317dd1['_color'] = '#ffffff',
        _0x317dd1['_bounds'] = {
            'left': 0x8e,
            'top': 0x28,
            'width': 0x96,
            'height': 0x28
        },
        _0x317dd1['_font'] = '24px\x20PublicSans-Bold',
        _0x317dd1['_rowH'] = 0x28,
        _0x317dd1['_letterSpacing'] = -0.8,
        _0x317dd1['_text'] = 'Supporto',
        _0x1cc6cb = new $Label(),
        _0x1cc6cb['_bounds'] = {
            'left': 0x8e,
            'top': 0x5e,
            'width': 0x1f4,
            'height': 0x34
        },
        _0x1cc6cb['_font'] = '52px\x20PublicSans-Regular',
        _0x1cc6cb['_rowH'] = 0x34,
        _0x1cc6cb['_letterSpacing'] = -1.2,
        _0x1cc6cb['_text'] = 'Informativa\x20Privacy',
        _0x4fd754 = new _0x381bb2(),
        _0x4fd754['_bounds'] = {
            'top': 0xee,
            'left': 0x8e,
            'width': 0x3dc + 0x26 + 0x18,
            'height': 0x2d3
        },
        _0x4fd754['setText'](_0x3d114c['title'], _0x3d114c['body']),
        _0x2eafb7 = new $Button0(),
        _0x2eafb7['_bounds'] = {
            'left': 0x542,
            'top': 0xe8,
            'width': 0x140,
            'height': 0x44
        },
        _0x2eafb7['_unfocusedBackground'] = '#999999',
        _0x2eafb7['_focusedBackground'] = '#000099',
        _0x2eafb7['_focusedColor'] = '#ffffff',
        _0x2eafb7['_text'] = 'Ok,\x20ho\x20capito',
        _0x5d58ca = _0x5ccf57(),
        _0xd17556['append'](_0x59a51a),
        _0xd17556['append'](_0x317dd1),
        _0xd17556['append'](_0x1cc6cb),
        _0x406937['append'](_0x4fd754),
        _0x406937['append'](_0x2eafb7),
        _0x406937['append'](_0x5d58ca),
        this['append'](_0xd17556),
        this['append'](_0x406937);
    }
    _0x363f75['prototype'] = Object['create']($Widget['prototype']),
    _0x363f75['prototype']['constructor'] = _0x363f75;
    function _0x5ccf57() {
        var _0x53c26e = new $Widget(), _0x13db2e, _0x3c7da2;
        return _0x53c26e['_bounds'] = {
            'top': 0x21d,
            'left': 0x543,
            'width': 0x173,
            'height': 0xc0 + 0x16 + 0xc8
        },
        _0x13db2e = new $Widget($DataLoader['getInstance']()['getSvgCode']('qrPolicy')),
        _0x13db2e['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': 0xc8,
            'height': 0xc8
        },
        _0x3c7da2 = new $Widget('<div>Per\x20visualizzare\x20la\x20pagina\x20scansiona\x20questo\x20codice\x20QR\x20con\x20il\x20tuo\x20smartphone\x20o\x20il\x20tuo\x20tablet.<br/>' + 'Oppure\x20accedi\x20da\x20qualsiasi\x20dispositivo\x20attraverso\x20l\x27indirizzo<br/>' + '<span\x20style=\x22font-family:\x20PublicSans-Bold\x22>https://www.rai.it/privacy-tv</span></div>'),
        _0x3c7da2['_bounds'] = {
            'top': 0xc0 + 0x16,
            'left': 0x0,
            'width': 0x173,
            'height': 0xc0
        },
        _0x3c7da2['_node']['style']['font'] = '22px\x20PublicSans-Regular',
        _0x3c7da2['_node']['style']['lineHeight'] = '30px',
        _0x3c7da2['_node']['style']['letterSpacing'] = '-0.8px',
        _0x53c26e['append'](_0x13db2e),
        _0x53c26e['append'](_0x3c7da2),
        _0x53c26e;
    }
    function _0x381bb2() {
        $Widget['call'](this),
        this['_node']['style']['overflow'] = 'hidden';
        var _0x5b5cd7, _0x195eba, _0x32d1b3, _0x4e13c2, _0x1c9ec8, _0x2538cd = 0x0, _0xcd8121 = ![];
        _0x5b5cd7 = new $Widget('<div><div\x20style=\x22position:\x20relative;\x20top:\x200;\x20width:\x20100%;\x20transition:\x20top\x200.3s\x20linear\x22></div></div>'),
        _0x5b5cd7['_top'] = 0x6,
        _0x5b5cd7['_width'] = 0x3dc,
        _0x5b5cd7['_height'] = 0x2a7 + 0x34,
        _0x5b5cd7['_node']['style']['font'] = '28px\x20PublicSans-Regular,Tiresias',
        _0x5b5cd7['_node']['style']['lineHeight'] = '36px',
        _0x5b5cd7['_node']['style']['letterSpacing'] = -0x1 * 0x500 / 0x780 + 'px',
        _0x195eba = new $Widget(),
        _0x195eba['_left'] = 0x3dc + 0x2e,
        _0x195eba['_width'] = 0x8,
        _0x195eba['_height'] = 0x2d3,
        _0x195eba['_background'] = 'rgb(227,227,227,0.2)',
        _0x195eba['_node']['style']['borderRadius'] = 0x8 + 'px',
        _0x32d1b3 = new $Widget(),
        _0x32d1b3['_left'] = 0x3dc + 0x26,
        _0x32d1b3['_width'] = 0x18,
        _0x32d1b3['_height'] = 0xc8,
        _0x32d1b3['_background'] = '#66669b',
        _0x32d1b3['_node']['style']['borderRadius'] = 0x4 + 'px',
        _0x32d1b3['_node']['style']['transition'] = 'top\x200.3s\x20linear,\x20background\x200.3s',
        _0x4e13c2 = new $Widget(),
        _0x4e13c2['_top'] = 0x6 + 0x34 + 0x1b5,
        _0x4e13c2['_width'] = 0x3de,
        _0x4e13c2['_height'] = 0xf1,
        this['append'](_0x5b5cd7),
        this['append'](_0x195eba),
        this['append'](_0x32d1b3),
        this['append'](_0x4e13c2),
        Object['defineProperty'](this, '_focused', {
            'get': function() {
                return _0xcd8121;
            },
            'set': function(_0x3f3404) {
                _0xcd8121 !== _0x3f3404 && (_0xcd8121 = _0x3f3404,
                _0x1c9ec8 ? _0x32d1b3['_background'] = _0x3f3404 ? '#000099' : '#999999' : _0x32d1b3['_background'] = _0x3f3404 ? '#FFFFFF' : '#66669b');
            }
        }),
        Object['defineProperty'](this, '_useBright', {
            'get': function() {
                return _0x1c9ec8;
            },
            'set': function(_0x16f094) {
                if (_0x1c9ec8 !== _0x16f094) {
                    _0x1c9ec8 = _0x16f094,
                    this['_color'] = _0x16f094 ? '#2e3b42' : '#ffffff',
                    _0x4e13c2['_node']['style']['backgroundImage'] = _0x1c9ec8 ? 'linear-gradient(to\x20bottom,\x20rgba(245,\x20245,\x20245,\x200)\x2050%,\x20#f5f5f5)' : 'linear-gradient(to\x20bottom,\x20rgba(0,\x200,\x2092,\x200)\x2050%,\x20#00005c)';
                    var _0x56ced2 = _0x5b5cd7['_node']['querySelectorAll']('div[class=\x22privacy-content\x22]\x20span');
                    for (var _0x2bdbe2 = 0x0; _0x2bdbe2 < _0x56ced2['length']; _0x2bdbe2++) {
                        _0x56ced2[_0x2bdbe2]['setAttribute']('class', _0x16f094 ? 'blue' : 'yellow');
                    }
                }
            }
        }),
        this['setText'] = function(_0x44dab6, _0x506e91) {
            _0x5b5cd7['_node']['getElementsByTagName']('div')[0x0]['innerHTML'] = '<div\x20style=\x22height:\x20auto;\x20font:\x20' + 0x20 + 'px\x20PublicSans-Bold,Tiresias,serif;\x20line-height:\x20' + 0x34 + 'px;\x22>' + _0x44dab6 + '</div><span>' + _0x506e91 + '</span>';
        }
        ,
        this['onHandleKey'] = function(_0x1250c4) {
            switch (_0x1250c4['keyCode']) {
            case KeyEvent['VK_UP']:
                _0x46dcde(this['_node']['offsetHeight']);
                break;
            case KeyEvent['VK_DOWN']:
                _0x2d900c(this['_node']['offsetHeight']);
                break;
            case KeyEvent['VK_BACK']:
                if (_0x2538cd)
                    this['reset']();
                else
                    return !![];
                break;
            case KeyEvent['VK_ENTER']:
            case KeyEvent['VK_LEFT']:
            case KeyEvent['VK_RIGHT']:
                return !![];
            }
        }
        ,
        this['reset'] = function() {
            var _0x5f4ad5 = _0x5b5cd7['_node']['getElementsByTagName']('div')[0x0];
            _0x5f4ad5['style']['top'] = '0px',
            _0x2538cd = 0x0,
            _0x32d1b3['_top'] = 0x0,
            _0x4e13c2['_visible'] = !![];
        }
        ;
        function _0x2d900c(_0x42db68) {
            var _0x50c8f3, _0x1b90d4, _0x14da0d;
            _0x50c8f3 = _0x5b5cd7['_node']['getElementsByTagName']('div')[0x0],
            _0x1b90d4 = _0x42db68,
            _0x14da0d = _0x50c8f3['offsetHeight'],
            _0x14da0d > _0x1b90d4 && (_0x2538cd -= 0x24,
            _0x2538cd + _0x14da0d < _0x1b90d4 && (_0x2538cd = _0x1b90d4 - _0x14da0d),
            _0x50c8f3['style']['top'] = _0x2538cd + 'px'),
            _0x5521b9(_0x14da0d, _0x1b90d4);
        }
        function _0x46dcde(_0x51c254) {
            var _0x997425, _0x4d483c, _0x353a83;
            _0x997425 = _0x5b5cd7['_node']['getElementsByTagName']('div')[0x0],
            _0x4d483c = _0x51c254,
            _0x353a83 = _0x997425['offsetHeight'],
            _0x353a83 > _0x4d483c && (_0x2538cd += 0x24,
            _0x2538cd > 0x0 && (_0x2538cd = 0x0),
            _0x997425['style']['top'] = _0x2538cd + 'px'),
            _0x5521b9(_0x353a83, _0x4d483c);
        }
        function _0x5521b9(_0x1d5014, _0x344e9f) {
            var _0x225f5a = _0x1d5014 > _0x344e9f, _0x29ff3a, _0x12d677 = _0x195eba['_height'] - _0x32d1b3['_height'];
            _0x225f5a && (_0x29ff3a = _0x2538cd * -0x1 / (_0x1d5014 - _0x344e9f),
            _0x32d1b3['_top'] = _0x12d677 * _0x29ff3a,
            _0x4e13c2['_visible'] = _0x29ff3a < 0x1),
            _0x195eba['_visible'] = _0x225f5a,
            _0x32d1b3['_visible'] = _0x225f5a;
        }
    }
    return _0x381bb2['prototype'] = Object['create']($Widget['prototype']),
    _0x381bb2['prototype']['constructor'] = _0x381bb2,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x363f75()),
            this['instance'];
        },
        'switch2': function(_0x435961, _0x48c33d) {
            var _0x56ef35 = $ModalPrivacy['getInstance']();
            _0x56ef35['_mode'] = _0x48c33d,
            $Gui['getInstance']()['append'](_0x56ef35),
            _0x435961['visibleTrigger'](![], function() {
                _0x48c33d !== 'support' && $Gui['getInstance']()['remove'](_0x435961),
                _0x56ef35['visibleTrigger'](!![], function() {
                    $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
                        'cg': [{
                            'key': 'cg1',
                            'val': $WebTrekk['CG1']
                        }, {
                            'key': 'cg5',
                            'val': 'Informativa\x20Privacy'
                        }],
                        'cp': [{
                            'key': 'cp11',
                            'val': 'hbbtv'
                        }, {
                            'key': 'cp12',
                            'val': 'rai\x20tv+'
                        }],
                        'url': $WebTrekk['sections']['SETTINGS'],
                        'immediate': !![]
                    });
                });
            });
        }
    };
}()
  , $RadioPoster = function() {
    function _0xabf327() {
        $Widget['call'](this),
        this['_className'] = 'RadioPoster',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x491b89 = new $Lottie();
        _0x491b89['_bounds'] = this['_bounds'],
        _0x491b89['_node']['style']['opacity'] = 0x0,
        _0x491b89['_domLoadedCbk'] = function() {
            _0x491b89['_node']['style']['opacity'] = EPG['getEpg']()['type'] === 'radio' ? 0x1 : 0x0;
        }
        ;
        if (TRANSITION)
            _0x491b89['_node']['style']['transition'] = 'opacity\x200.3s';
        var _0x5804fe = undefined;
        _0x491b89['_node']['addEventListener']('transitionend', function(_0x234785) {
            _0x5804fe && (_0x5804fe(),
            _0x5804fe = undefined);
        }
        ['bind'](this)),
        this['append'](_0x491b89);
        var _0x3f956d = new $Widget('<img\x20src=\x27\x27>');
        _0x3f956d['_bounds'] = {
            'top': 0xf2,
            'left': 0x2c7,
            'width': 0x1f4,
            'height': 0x1f4
        },
        _0x3f956d['_originalBounds'] = _0x3f956d['_bounds'],
        _0x3f956d['_node']['src'] = $Img['TRANSPARENT'],
        _0x3f956d['_node']['addEventListener']('error', function(_0x5415ea) {
            _0x3f956d['_node']['src'] = $Img['TRANSPARENT'];
        }),
        _0x3f956d['_node']['addEventListener']('load', function(_0x2d6770) {
            if (_0x3f956d['_node']['src'] !== $Img['TRANSPARENT']) {
                var _0x1e76c9 = {
                    'top': -0x1,
                    'left': -0x1,
                    'width': _0x3f956d['_node']['naturalWidth'],
                    'height': _0x3f956d['_node']['naturalHeight']
                }
                  , _0x4b9923 = _0x1e76c9['width'] / _0x1e76c9['height']
                  , _0xea224b = _0x3f956d['_originalBounds'];
                _0x1e76c9['width'] = _0xea224b['width'],
                _0x1e76c9['height'] = _0x1e76c9['width'] / _0x4b9923,
                _0x1e76c9['top'] = _0xea224b['top'] + (_0xea224b['height'] - _0x1e76c9['height']) / 0x2,
                _0x1e76c9['left'] = _0xea224b['left'] + (_0xea224b['width'] - _0x1e76c9['width']) / 0x2,
                _0x3f956d['_bounds'] = _0x1e76c9;
            }
        }),
        _0x3f956d['_cornerR'] = [0x4, 0x4, 0x4, 0x4],
        this['append'](_0x3f956d);
        var _0xcbc55d = new $MultilineLabel();
        _0xcbc55d['_color'] = '#fff',
        _0xcbc55d['_bounds'] = {
            'left': 0x30,
            'top': 0x306,
            'width': this['_width'] - 0x60,
            'height': 0x78
        },
        _0xcbc55d['_font'] = '50px\x20PublicSans-Bold',
        _0xcbc55d['_letterSpacing'] = -1.3,
        _0xcbc55d['_textAlign'] = 'center',
        _0xcbc55d['_rowH'] = 0x3c,
        _0xcbc55d['_text'] = '',
        this['append'](_0xcbc55d);
        var _0x44db02 = new $Label();
        _0x44db02['_color'] = '#999999',
        _0x44db02['_bounds'] = {
            'left': 0x0,
            'top': 0x362,
            'width': 0x397,
            'height': 0x24
        },
        _0x44db02['_font'] = '28px\x20PublicSans-SemiBold,Tiresias',
        _0x44db02['_textAlign'] = 'center',
        _0x44db02['_letterSpacing'] = -1.3,
        _0x44db02['_rowH'] = 0x24,
        _0x44db02['_text'] = '',
        this['append'](_0x44db02);
        var _0xe9f8d0 = new $Label();
        _0xe9f8d0['_color'] = '#999999',
        _0xe9f8d0['_bounds'] = {
            'left': 0x3b7,
            'top': 0x362,
            'width': 0x3c9,
            'height': 0x24
        },
        _0xe9f8d0['_font'] = '28px\x20PublicSans-SemiBold,Tiresias',
        _0xe9f8d0['_textAlign'] = 'center',
        _0xe9f8d0['_letterSpacing'] = -1.3,
        _0xe9f8d0['_rowH'] = 0x24,
        _0xe9f8d0['_text'] = '',
        this['append'](_0xe9f8d0);
        var _0x232bcc = 1.2
          , _0x365338 = new $Svg($DataLoader['getInstance']()['getSvgCode']('RaiSquareLogo'));
        _0x365338['_visible'] = ![],
        _0x365338['_bounds'] = {
            'top': 0x37,
            'left': 0x62,
            'width': 0x3c * _0x232bcc,
            'height': 0x3c * _0x232bcc
        },
        this['append'](_0x365338);
        var _0x4bb1b8 = new $Svg('<svg\x20width=\x220\x22\x20height=\x2260\x22\x20viewBox=\x220\x200\x200\x200\x22><path></path></svg>');
        _0x4bb1b8['_visible'] = ![],
        _0x4bb1b8['_bounds'] = {
            'top': 0x37,
            'left': 0x62,
            'width': 0x0,
            'height': 0x3c * _0x232bcc
        },
        this['append'](_0x4bb1b8);
        var _0x250675 = {
            'Rai\x20Radio\x201': 'radio1',
            'Rai\x20Radio\x202': 'radio2',
            'Rai\x20Radio\x203': 'radio3',
            'Rai\x20Isoradio': 'isoradio',
            'Rai\x20Radio\x201\x20Sport': 'radio1Sport',
            'Rai\x20Radio\x202\x20Indie': 'radio2Indie',
            'Rai\x20Radio\x20Indie': 'radio2Indie',
            'Rai\x20Radio\x203\x20Classica': 'radio3Classica',
            'Rai\x20GrParlamento': 'radioGrParlamento',
            'Rai\x20Radio\x20Kids': 'radioKids',
            'Rai\x20Radio\x20Live': 'radioLive',
            'Rai\x20Radio\x20Techete\x27': 'radioTechete',
            'Rai\x20Radio\x20Tutta\x20Italiana': 'radioTuttaItaliana',
            'Rai\x20Radio\x20Trst\x20A': 'isoradio'
        };
        function _0xff8180(_0x7bb1e2) {
            var _0x3cc84d = parseInt(_0x7bb1e2 / 0x3e8)
              , _0x2d440b = parseInt(_0x3cc84d / 0x3c)
              , _0xe0101e = parseInt(_0x2d440b / 0x3c);
            _0x2d440b -= 0x3c * _0xe0101e;
            var _0x449575 = _0xe0101e > 0x0 ? _0xe0101e + '\x20h\x20' : ''
              , _0x437f1f = _0x2d440b > 0x0 ? _0x2d440b + '\x20min' : '';
            return _0x449575 + _0x437f1f;
        }
        var _0xed5756, _0x48c1e3, _0x57efd0 = new DOMParser(), _0x41109e = undefined;
        this['update'] = function(_0x3212b4) {
            var _0x279e77;
            !_0x3212b4 ? (println('[RADIO\x20POSTER]\x20invalid\x20channel,\x20skip!', 'wrn'),
            _0x279e77 = {
                'type': ''
            }) : (_0x279e77 = EPG['getEpg'](_0x3212b4),
            _0x279e77['hybrid'] && document['querySelector']('div[widget-class=\x22loadingScreen\x22]') ? (println('[RADIO\x20POSTER]\x20hybrid\x20channel,\x20skip!', 'wrn'),
            _0x279e77 = {
                'type': ''
            }) : println('[RADIO\x20POSTER]' + _0x279e77['type'] + '\x20|\x20' + _0x279e77['name'] + '\x20|\x20' + _0x279e77['dvbTriplet'], 'inf'));
            this['_background'] = _0x279e77['type'] === 'radio' ? _0x279e77['color'] : 'transparent';
            _0x491b89['_node']['style']['opacity'] === '1' ? (_0x5804fe = function() {
                if (_0x279e77['type'] === 'radio')
                    _0x491b89['setAnimationPath']('resources/jsonAnimation/radioBck/' + _0x250675[_0x279e77['name']] + '.json');
                else
                    _0x491b89['_animation']['stop']();
            }
            ,
            _0x491b89['_node']['style']['opacity'] = 0x0) : _0x279e77['type'] === 'radio' && _0x491b89['setAnimationPath']('resources/jsonAnimation/radioBck/' + _0x250675[_0x279e77['name']] + '.json');
            _0x3f956d['_node']['src'] = _0x279e77['type'] === 'radio' ? _0x279e77['chEpg']['_now']['_imageUrl'] : $Img['TRANSPARENT'],
            _0xcbc55d['_text'] = _0x279e77['type'] === 'radio' && _0x279e77['epg'] === 'true' ? _0x279e77['chEpg']['_now']['_name'] : '',
            _0x44db02['_text'] = _0x279e77['type'] === 'radio' && _0x279e77['epg'] === 'true' ? _0x279e77['chEpg']['_now']['_hhmmStartString'] : '',
            _0xe9f8d0['_text'] = _0x279e77['type'] === 'radio' && _0x279e77['epg'] === 'true' ? _0xff8180(_0x279e77['chEpg']['_now']['_duration']) : '';
            var _0x33c0ca = _0x3f956d['_width'] / 0x8;
            _0x44db02['_width'] = _0x44db02['_text']['width'](_0x44db02['_font'], _0x44db02['_letterSpacing']) + 0x14,
            _0x44db02['_left'] = 0x780 / 0x2 - _0x33c0ca - _0x44db02['_width'] / 0x2,
            _0xe9f8d0['_width'] = _0xe9f8d0['_text']['width'](_0xe9f8d0['_font'], _0xe9f8d0['_letterSpacing']) + 0x14,
            _0xe9f8d0['_left'] = 0x780 / 0x2 + _0x33c0ca - _0xe9f8d0['_width'] / 0x2;
            _0xcbc55d['_rowsStats']['totalRowsCount'] > 0x1 ? (_0x44db02['_top'] = 0x362 + 0x3c,
            _0xe9f8d0['_top'] = 0x362 + 0x3c) : (_0x44db02['_top'] = 0x362,
            _0xe9f8d0['_top'] = 0x362);
            _0x365338['_visible'] = _0x279e77['type'] === 'radio';
            if (_0x279e77['type'] === 'radio') {
                _0xed5756 = $DataLoader['getInstance']()['getSvgCode'](_0x279e77['name']),
                _0x48c1e3 = _0x57efd0['parseFromString'](_0xed5756, 'image/svg+xml')['getElementsByTagName']('svg')[0x0];
                if (_0x48c1e3) {
                    var _0x30711f = parseFloat(_0x48c1e3['getAttribute']('width'));
                    _0x30711f *= _0x232bcc,
                    _0x4bb1b8['_width'] = _0x30711f,
                    _0x4bb1b8['_node']['setAttribute']('width', _0x30711f),
                    _0x4bb1b8['_node']['setAttribute']('viewBox', _0x48c1e3['getAttribute']('viewBox')),
                    _0x4bb1b8['_node']['removeChild'](_0x4bb1b8['_node']['getElementsByTagName']('path')[0x0]),
                    _0x4bb1b8['_node']['appendChild'](_0x48c1e3['getElementsByTagName']('path')[0x0]),
                    _0x4bb1b8['_visible'] = !![];
                }
            } else
                _0x4bb1b8['_visible'] = ![];
            _0x41109e && (clearTimeout(_0x41109e),
            _0x41109e = null);
            if (_0x279e77['type'] === 'radio') {
                var _0x1fb6ff = _0x279e77['chEpg']['_now']['_startTime'] + _0x279e77['chEpg']['_now']['_duration']
                  , _0x2b7c06 = _0x1fb6ff - Date['now']();
                _0x41109e = setTimeout(function() {
                    this['update'](_0x3212b4);
                }
                ['bind'](this), _0x2b7c06);
            }
        }
        ,
        this['_channelChangeSucceededListener'] = $VideoManager['getInstance']()['addChannelChangeSucceededListener'](this['update']['bind'](this));
    }
    return _0xabf327['prototype'] = Object['create']($Widget['prototype']),
    _0xabf327['prototype']['constructor'] = _0xabf327,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0xabf327()),
            this['instance'];
        }
    };
}()
  , $Wrapper = function() {
    function _0x1f6b1f() {
        $Widget['call'](this),
        this['_className'] = 'Wrapper',
        Object['defineProperty'](this, '_focusRestore', {
            'value': undefined,
            'writable': !![]
        });
        var _0x5f36ac = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5f36ac;
            },
            'set': function(_0x1df925) {
                if (_0x5f36ac !== _0x1df925) {
                    _0x5f36ac = _0x1df925;
                    if (_0x1df925) {
                        if (this['_focusRestore'])
                            this['_focusRestore']['_focused'] = !![],
                            this['_focusRestore'] = undefined;
                        else {
                            if (this['_children']['length'] > 0x0)
                                this['_children'][0x0]['_focused'] = !![];
                        }
                    } else {
                        this['_focusRestore'] = this['_focusedItem'];
                        if (this['_focusRestore'])
                            this['_focusRestore']['_focused'] = ![];
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_focusedItem', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x592a20 = this['_focusedIndex'];
                return _0x592a20 !== undefined ? this['_children'][_0x592a20] : undefined;
            }
        }),
        Object['defineProperty'](this, '_focusedIndex', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                for (var _0x429c8f = 0x0; _0x429c8f < this['_children']['length']; _0x429c8f++)
                    if (this['_children'][_0x429c8f]['_focused'])
                        return _0x429c8f;
                return undefined;
            },
            'set': function(_0x58ba71) {
                for (var _0xf91895 = 0x0; _0xf91895 < this['_children']['length']; _0xf91895++) {
                    this['_children'][_0xf91895]['_focused'] = _0xf91895 === _0x58ba71,
                    _0xf91895 === _0x58ba71 && (this['_focusRestore'] = this['_children'][_0xf91895]);
                }
            }
        }),
        this['append'] = function(_0xc8afcd, _0x339321) {
            var _0x126635 = this['_children']['length']
              , _0x347adc = _0x126635 > 0x0 ? this['_children'][_0x126635 - 0x1] : undefined;
            _0xc8afcd['_height'] > this['_height'] && (this['_height'] = _0xc8afcd['_height'],
            this['_children']['forEach'](function(_0x3597af) {
                _0x3597af['_top'] = (this['_height'] - _0x3597af['_height']) / 0x2;
            }
            ['bind'](this)));
            _0xc8afcd['_left'] = _0x347adc ? _0x347adc['_left'] + _0x347adc['_width'] : 0x0,
            _0xc8afcd['_top'] = (this['_height'] - _0xc8afcd['_height']) / 0x2,
            this['_width'] = _0xc8afcd['_left'] + _0xc8afcd['_width'],
            $Widget['prototype']['append']['call'](this, _0xc8afcd);
            if (!_0x339321) {
                if (this['_focused'] && !this['_focusedItem'])
                    _0xc8afcd['_focused'] = !![];
            }
        }
        ,
        this['remove'] = function(_0x40b476, _0x5bc2c6) {
            $Widget['prototype']['remove']['call'](this, _0x40b476, _0x5bc2c6);
            for (var _0x112f00 = 0x0, _0x5a855e = 0x0; _0x112f00 < this['_children']['length']; _0x112f00++) {
                _0x5a855e = Math['max'](_0x5a855e, this['_children'][_0x112f00]['_height']);
            }
            var _0x6aced8 = 0x0;
            this['_height'] = _0x5a855e,
            this['_children']['forEach'](function(_0x12561b) {
                _0x12561b['_top'] = (_0x5a855e - _0x12561b['_height']) / 0x2,
                _0x12561b['_left'] = _0x6aced8,
                _0x6aced8 += _0x12561b['_width'];
            }
            ['bind'](this)),
            this['_width'] = _0x6aced8;
            if (_0x40b476 === this['_focusRestore'])
                this['_focusRestore'] = undefined;
        }
        ,
        this['moveFocus'] = function(_0x2e3a1d) {
            var _0x12d85f = undefined;
            if (this['_children']['length'] > 0x1) {
                var _0x12d260 = this['_focusedIndex'];
                switch (_0x2e3a1d) {
                case $Wrapper['LEFT']:
                    _0x12d85f = _0x12d260 - 0x1 >= 0x0 ? this['_children'][_0x12d260 - 0x1] : undefined;
                    break;
                case $Wrapper['RIGHT']:
                    _0x12d85f = _0x12d260 + 0x1 <= this['_children']['length'] - 0x1 ? this['_children'][_0x12d260 + 0x1] : undefined;
                    break;
                }
                _0x12d85f && (this['_children'][_0x12d260]['_focused'] = ![],
                _0x12d85f['_focused'] = !![]);
            }
            return _0x12d85f;
        }
        ,
        this['reset'] = function() {
            this['_focusRestore'] = undefined;
        }
        ;
    }
    return _0x1f6b1f['prototype'] = Object['create']($Widget['prototype']),
    _0x1f6b1f['prototype']['constructor'] = _0x1f6b1f,
    _0x1f6b1f['LEFT'] = 0x0,
    _0x1f6b1f['RIGHT'] = 0x1,
    _0x1f6b1f;
}()
  , $Menu0 = function() {
    function _0xc795c8() {
        $Widget['call'](this),
        this['_className'] = 'Menu0',
        this['_node']['style']['overflow'] = 'hidden';
        var _0x380b80 = new $Wrapper();
        _0x380b80['_left'] = 0x0;
        TRANSITION && (_0x380b80['_node']['style']['transition'] = 'left\x20ease-in-out\x200.3s');
        $Widget['prototype']['append']['call'](this, _0x380b80),
        Object['defineProperty'](this, '_slider', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x380b80;
            }
        });
        var _0x4cd2c1 = undefined;
        Object['defineProperty'](this, '_leftMarker', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4cd2c1;
            },
            'set': function(_0xd4cb5d) {
                _0x4cd2c1 = _0xd4cb5d,
                _0x4cd2c1['_left'] = 0x0,
                _0x4cd2c1['_className'] = 'LeftMarker',
                $Widget['prototype']['append']['call'](this, _0x4cd2c1),
                _0x4cd2c1['_visible'] = _0x380b80['_left'] < 0x0;
            }
        });
        var _0x78e976 = undefined;
        Object['defineProperty'](this, '_rightMarker', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x78e976;
            },
            'set': function(_0x4c7d02) {
                _0x78e976 = _0x4c7d02,
                _0x78e976['_left'] = this['_width'] - _0x78e976['_width'],
                _0x78e976['_className'] = 'RightMarker',
                $Widget['prototype']['append']['call'](this, _0x78e976),
                _0x78e976['_visible'] = _0x380b80['_left'] + _0x380b80['_width'] > this['_width'];
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x380b80['_focused'];
            },
            'set': function(_0x13c8c9) {
                _0x380b80['_focused'] = _0x13c8c9;
            }
        }),
        Object['defineProperty'](this, '_focusedItem', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x380b80['_focusedItem'];
            }
        }),
        Object['defineProperty'](this, '_focusedIndex', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x380b80['_focusedIndex'];
            },
            'set': function(_0xc03758) {
                if (_0xc03758 >= 0x0 && _0xc03758 < _0x380b80['_children']['length']) {
                    var _0x54cbe7 = _0x380b80['_focusedIndex'] || 0x0;
                    if (_0xc03758 !== _0x54cbe7) {
                        _0x380b80['_node']['style']['transition'] = '';
                        for (var _0x62818c = _0xc03758 > _0x54cbe7 ? 0x1 : -0x1, _0x5d8def = _0x62818c === 0x1 ? $Wrapper['RIGHT'] : $Wrapper['LEFT']; _0x54cbe7 !== _0xc03758; _0x54cbe7 += _0x62818c) {
                            this['moveFocus'](_0x5d8def);
                        }
                        TRANSITION && (_0x380b80['_node']['offsetWidth'],
                        _0x380b80['_node']['style']['transition'] = 'left\x20ease-in-out\x200.3s');
                    }
                }
            }
        }),
        this['append'] = function(_0x27a912, _0x1f2689) {
            _0x380b80['append'](_0x27a912, _0x1f2689),
            this['_height'] = _0x380b80['_height'];
            if (_0x78e976)
                _0x78e976['_visible'] = _0x380b80['_left'] + _0x380b80['_width'] > this['_width'];
        }
        ,
        this['remove'] = function(_0x32d7f6, _0x5ac382) {
            _0x380b80['remove'](_0x32d7f6, _0x5ac382),
            this['_height'] = _0x380b80['_height'];
        }
        ,
        this['removeAll'] = function(_0x3c9ba7) {
            while (_0x380b80['_children']['length'] > 0x0)
                _0x380b80['remove'](_0x380b80['_children'][0x0], _0x3c9ba7);
            _0x380b80['_left'] = 0x0;
            if (_0x4cd2c1)
                _0x4cd2c1['_visible'] = ![];
            if (_0x78e976)
                _0x78e976['_visible'] = _0x380b80['_left'] + _0x380b80['_width'] > this['_width'];
        }
        ,
        this['moveFocus'] = function(_0x9ee0e1) {
            var _0x1b5e50 = _0x380b80['moveFocus'](_0x9ee0e1);
            if (_0x1b5e50) {
                var _0x5ce694 = _0x380b80['_left'] + _0x1b5e50['_left']
                  , _0x55ed5b = _0x5ce694 + _0x1b5e50['_width'];
                if (_0x5ce694 < 0x0)
                    _0x380b80['_left'] += -_0x5ce694;
                else
                    _0x55ed5b > this['_width'] && (_0x380b80['_left'] -= _0x55ed5b - this['_width']);
                if (_0x4cd2c1)
                    _0x4cd2c1['_visible'] = _0x380b80['_left'] < 0x0;
                if (_0x78e976)
                    _0x78e976['_visible'] = _0x380b80['_left'] + _0x380b80['_width'] > this['_width'];
            }
            return _0x1b5e50;
        }
        ;
    }
    return _0xc795c8['prototype'] = Object['create']($Widget['prototype']),
    _0xc795c8['prototype']['constructor'] = _0xc795c8,
    _0xc795c8['LEFT'] = 0x0,
    _0xc795c8['RIGHT'] = 0x1,
    _0xc795c8;
}()
  , $MenuGuida = function() {
    function _0x10da37(_0x5ea7c1) {
        $Menu0['call'](this),
        this['_className'] = _0x5ea7c1 === $MenuGuida['TV'] ? 'MenuGuidaTV' : 'MenuGuidaRADIO';
        var _0x116d49 = _0x5ea7c1 === $MenuGuida['TV'] ? 0x3 : 0x4;
        function _0x49127e(_0x54ca34) {
            for (var _0x300cc0 = 0x0, _0x1e0847; _0x300cc0 < EPG['radio']['length']; _0x300cc0++) {
                _0x1e0847 = EPG['radio'][_0x300cc0];
                if (_0x1e0847 && _0x1e0847['epgName'] === _0x54ca34)
                    return _0x1e0847;
            }
        }
        this['update'] = function() {
            this['removeAll']();
            var _0x3da0a6 = EPG['getEpg']()
              , _0x1114dc = _0x3da0a6['epgFormat'] === 'portrait';
            _0x3da0a6['type'] === 'tv' && !_0x1114dc && (_0x3da0a6 = _0x49127e(_0x3da0a6['epgName']) || _0x3da0a6);
            if (_0x1114dc)
                this['append'](new $ThmbGuidaRaiPlay());
            for (var _0x5f221a = 0x0, _0x3a3366; _0x5f221a < _0x3da0a6['chEpg']['_infoArray']['length']; _0x5f221a++) {
                _0x3a3366 = _0x3da0a6['type'] === 'tv' ? new $ThmbGuidaTV(!![]) : new $ThmbGuidaRadio(!![]),
                _0x3a3366['_epg'] = _0x3da0a6['chEpg']['_infoArray'][_0x5f221a];
                if (_0x5f221a === _0x3da0a6['chEpg']['_infoArray']['length'] - 0x1 && _0x3da0a6['type'] === 'radio')
                    _0x3a3366['_rightStuff'] += 0x8c;
                this['append'](_0x3a3366);
            }
            if (_0x1114dc)
                this['append'](new $ThmbGuidaRaiPlay({
                    'leftStuff': 0xf,
                    'rightStuff': 0x8c,
                    'topStuff': 0xc,
                    'bottomStuff': 0xc
                }));
        }
        ,
        this['focus2OnAir'] = function() {
            var _0x4fba2e = this['_slider']['_children']
              , _0x462afd = _0x4fba2e['length']
              , _0x243ff7 = 0x0;
            for (var _0x2a7952 = 0x0; _0x2a7952 < _0x462afd; _0x2a7952++) {
                var _0x4e9b45 = _0x4fba2e[_0x2a7952]['_timeSentry'];
                if (_0x4e9b45 === 0x1 && !_0x243ff7)
                    _0x243ff7 = _0x2a7952;
                _0x4fba2e[_0x2a7952]['_focused'] = _0x4e9b45 === 0x0;
            }
            !this['_focusedItem'] && (_0x4fba2e[_0x243ff7]['_focused'] = !![]);
            if (this['_focusedIndex'] >= _0x462afd - _0x116d49)
                this['_slider']['_left'] = this['_width'] - this['_slider']['_width'] - 0x88;
            else
                this['_slider']['_left'] -= this['_focusedItem']['_left'] + this['_slider']['_left'] - 0x88;
            for (var _0x2a7952 = 0x0, _0x36e682; _0x2a7952 < _0x462afd; _0x2a7952++) {
                _0x36e682 = this['_slider']['_left'] + _0x4fba2e[_0x2a7952]['_left'];
                if (_0x36e682 > -_0x4fba2e[_0x2a7952]['_width'] && _0x36e682 < this['_width'])
                    _0x4fba2e[_0x2a7952]['_loadLock'] = ![];
            }
        }
        ,
        this['moveFocus'] = function(_0xede687) {
            var _0x3e0b0d = undefined
              , _0x5ce5b0 = undefined
              , _0x4dc810 = this['_focusedIndex'];
            switch (_0xede687) {
            case $Wrapper['LEFT']:
                _0x4dc810 - 0x1 >= 0x0 && (_0x5ce5b0 = _0x4dc810 - 0x1,
                _0x3e0b0d = this['_slider']['_children'][_0x5ce5b0]);
                break;
            case $Wrapper['RIGHT']:
                _0x4dc810 + 0x1 < this['_slider']['_children']['length'] && (_0x5ce5b0 = _0x4dc810 + 0x1,
                _0x3e0b0d = this['_slider']['_children'][_0x5ce5b0]);
                break;
            }
            if (_0x3e0b0d) {
                this['_slider']['_children'][_0x4dc810]['_focused'] = ![];
                var _0x305644 = this['_slider']['_children'][0x1]['_width'];
                switch (_0xede687) {
                case $Wrapper['LEFT']:
                    _0x5ce5b0 < this['_slider']['_children']['length'] - (_0x116d49 + 0x1) ? this['_slider']['_left'] += _0x305644 : _0x5ce5b0 === this['_slider']['_children']['length'] - (_0x116d49 + 0x1) && (this['_slider']['_left'] -= _0x3e0b0d['_left'] + this['_slider']['_left'] - 0x88);
                    _0x3e0b0d['_loadLock'] = ![];
                    if (_0x5ce5b0 > 0x0)
                        this['_slider']['_children'][_0x5ce5b0 - 0x1]['_loadLock'] = ![];
                    break;
                case $Wrapper['RIGHT']:
                    _0x5ce5b0 < this['_slider']['_children']['length'] - _0x116d49 ? this['_slider']['_left'] -= _0x305644 : _0x5ce5b0 === this['_slider']['_children']['length'] - _0x116d49 && (_0x305644 = this['_slider']['_left'] + this['_slider']['_width'] - (this['_left'] + this['_width']),
                    this['_slider']['_left'] -= _0x305644);
                    var _0x1151f8 = _0x5ce5b0 + _0x116d49;
                    _0x1151f8 < this['_slider']['_children']['length'] && (this['_slider']['_children'][_0x1151f8]['_loadLock'] = ![]);
                    break;
                }
                this['_slider']['_children'][_0x5ce5b0]['_focused'] = !![];
            }
        }
        ;
    }
    return _0x10da37['prototype'] = Object['create']($Menu0['prototype']),
    _0x10da37['prototype']['constructor'] = _0x10da37,
    _0x10da37['RADIO'] = 0x0,
    _0x10da37['TV'] = 0x1,
    _0x10da37;
}()
  , $SceneTA = function() {
    function _0x263a12() {
        $Widget['call'](this),
        this['_className'] = 'SceneTA',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x1b6d97 = 0x11c
          , _0x2419a7 = 0xa0
          , _0x5b2d57 = 0x0
          , _0x3339b7 = {
            'left': _0x1b6d97 - _0x5b2d57,
            'scale': (0x500 - _0x1b6d97 + 0x2 * _0x5b2d57) / 0x500
        }
          , _0x5bcab1 = {};
        Object['defineProperty'](_0x5bcab1, '_left', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x3f9d80 = document['getElementById']('__tvp_video_wrapper');
                return parseFloat(_0x3f9d80['style']['left']);
            },
            'set': function(_0x2f9eb8) {
                $VideoManager['getInstance']()['_left'] = _0x2f9eb8;
                var _0x501c30 = document['getElementById']('__tvp_video_wrapper');
                _0x501c30['style']['left'] = _0x2f9eb8 + 'px';
            }
        }),
        Object['defineProperty'](_0x5bcab1, '_scale', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x4e3ba2 = document['getElementById']('__tvp_video_wrapper');
                return parseFloat(_0x4e3ba2['style']['width']) / 0x500;
            },
            'set': function(_0x3170c2) {
                $VideoManager['getInstance']()['_scale'] = _0x3170c2;
                var _0x200eb7 = document['getElementById']('__tvp_video_wrapper')
                  , _0x58bec5 = _0x200eb7['firstElementChild'];
                _0x200eb7['style']['width'] = 0x500 * _0x3170c2 + 'px',
                _0x200eb7['style']['height'] = 0x2d0 * _0x3170c2 + 'px',
                _0x58bec5 && (_0x58bec5['width'] = 0x500 * _0x3170c2,
                _0x58bec5['height'] = 0x2d0 * _0x3170c2);
            }
        });
        var _0x4294c6 = new $Widget();
        _0x4294c6['_node']['style']['backgroundImage'] = 'url(\x22resources/TA/L.png?d=' + Date['now']() + '\x22)',
        _0x4294c6['_node']['style']['backgroundRepeat'] = 'no-repeat',
        _0x4294c6['_node']['style']['backgroundSize'] = '1920px\x201080px',
        _0x4294c6['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x1b6d97 * 0x780 / 0x500,
            'height': 0x438
        },
        this['append'](_0x4294c6);
        var _0x78adb7 = new $Widget();
        _0x78adb7['_node']['style']['backgroundImage'] = 'url(\x22resources/TA/L.png?d=' + Date['now']() + '\x22)',
        _0x78adb7['_node']['style']['backgroundRepeat'] = 'no-repeat',
        _0x78adb7['_node']['style']['backgroundSize'] = '1920px\x201080px',
        _0x78adb7['_node']['style']['backgroundPosition'] = '0px\x20-' + (0x438 - _0x2419a7 * 0x780 / 0x500) + 'px',
        _0x78adb7['_bounds'] = {
            'left': 0x0,
            'top': 0x438 - _0x2419a7 * 0x780 / 0x500,
            'width': 0x780,
            'height': _0x2419a7 * 0x780 / 0x500
        },
        this['append'](_0x78adb7);
        var _0x2eb38f = new $Img()
          , _0x497aa5 = function() {
            $BannerLancioApp['getInstance']()['quickHide'](),
            $BannerLancioRaiPlay['getInstance']()['quickHide'](),
            this['_node']['style']['display'] = 'block',
            _0x5bcab1['_left'] = _0x3339b7['left'],
            _0x5bcab1['_scale'] = _0x3339b7['scale'],
            this['_keyListener'] = _0x3443b0;
            var _0x143308 = _0x13d7e3['slice'](0x0);
            _0x143308['forEach'](function(_0x4ef5e8, _0x54a989, _0x1add1c) {
                _0x1add1c[_0x54a989]();
            }
            ['bind'](this));
        }
        ['bind'](this)
          , _0x13d7e3 = [];
        this['addPreloadListener'] = function(_0x30c627) {
            return _0x13d7e3['push'](_0x30c627),
            _0x30c627;
        }
        ,
        this['removePreloadListener'] = function(_0x4ce575) {
            var _0x2b8935 = _0x13d7e3['indexOf'](_0x4ce575);
            return _0x2b8935 >= 0x0 ? (_0x13d7e3['splice'](_0x2b8935, 0x1),
            !![]) : ![];
        }
        ;
        var _0x3443b0 = function(_0x3e90d3) {
            switch (_0x3e90d3['keyCode']) {
            case KeyEvent['VK_ENTER']:
                var _0xc13f75 = 'dvb://current.ait/3c0.67'
                  , _0x590048 = document['getElementById']('appmgr')['getOwnerApplication'](document)['createApplication'](_0xc13f75, ![]);
                !_0x590048 && (println('unable\x20to\x20launch\x20app\x20using\x20AIT,\x20using\x20url...', 'err'),
                _0xc13f75 = 'http://cdn.smartclip.net/assets/atv/ms/20191120_Disney_StarWars_Microsite/index.html',
                _0x590048 = document['getElementById']('appmgr')['getOwnerApplication'](document)['createApplication'](_0xc13f75, ![]),
                !_0x590048 && println('cannot\x20launch\x20mini-site', 'err'));
                break;
            case KeyEvent['VK_RED']:
                this['_visible'] = ![];
                break;
            }
        }
        ['bind'](this);
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['display'] && this['_node']['style']['display'] !== '' ? this['_node']['style']['display'] === 'block' : this['_node']['offsetParent'] !== undefined;
            },
            'set': function(_0x175a4e) {
                _0x175a4e ? (_0x2eb38f['removeStateChengeListener'](_0x497aa5),
                _0x2eb38f['addStateChengeListener'](_0x497aa5),
                _0x2eb38f['_src'] = _0x4294c6['_node']['style']['backgroundImage']) : (this['_keyListener'] = undefined,
                _0x5bcab1['_left'] = 0x0,
                _0x5bcab1['_scale'] = 0x1,
                this['_node']['style']['display'] = 'none',
                _0x48ad17 && (_0x48ad17['stop'](),
                _0x48ad17 = null));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['_channelChangeSucceededListener'] = $VideoManager['getInstance']()['addChannelChangeSucceededListener'](function() {
            this['_visible'] = ![];
        }
        ['bind'](this));
        var _0x48ad17;
        this['setData'] = function(_0x372c2a, _0x2b9a7e, _0xdb9568) {
            _0x48ad17 = _0xdb9568,
            _0x4294c6['_node']['style']['backgroundImage'] = 'url(\x22' + _0x372c2a + '\x22)',
            _0x78adb7['_node']['style']['backgroundImage'] = 'url(\x22' + _0x372c2a + '\x22)';
        }
        ;
    }
    return _0x263a12['prototype'] = Object['create']($Widget['prototype']),
    _0x263a12['prototype']['constructor'] = _0x263a12,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x263a12()),
            this['instance'];
        }
    };
}()
  , $ButtonTA = function() {
    function _0x5ac156(_0x4e80dd) {
        Object['defineProperty'](this, '_defaultForegroundColor', {
            'value': '#565656',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_defaultBackgroundColor', {
            'value': '#dddddd',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusForegroundColor', {
            'value': '#dddddd',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusBackgroundColor', {
            'value': '#565656',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_activeForegroundColor', {
            'value': '#565656',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_activeBackgroundColor', {
            'value': '#dddddd',
            'writable': !![]
        }),
        $Label['call'](this),
        this['_className'] = 'ButtonTA';
        if (TRANSITION)
            this['_node']['style']['transition'] = 'background\x20linear\x200.3s,\x20color\x20linear\x200.3s';
        this['_width'] = 0x98,
        this['_height'] = 0x2a,
        this['_color'] = this['_defaultForegroundColor'],
        this['_background'] = this['_defaultBackgroundColor'],
        this['_font'] = '16px\x20PublicSans-Bold',
        this['_letterSpacing'] = -0.8,
        this['_textVerticalAlign'] = $MultilineLabel['CENTER'],
        this['_textAlign'] = 'center',
        this['_cornerR'] = 0x4,
        this['_text'] = _0x4e80dd ? _0x4e80dd : '';
        var _0x4bb3fa = new $Frame();
        _0x4bb3fa['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': this['_width'],
            'height': this['_height']
        },
        _0x4bb3fa['_cornerR'] = this['_cornerR'],
        _0x4bb3fa['_thickness'] = 0x3,
        _0x4bb3fa['_node']['style']['opacity'] = 0x0,
        _0x4bb3fa['_color'] = this['_defaultForegroundColor'];
        if (TRANSITION)
            _0x4bb3fa['_node']['style']['transition'] = 'all\x200.3s';
        this['append'](_0x4bb3fa);
        var _0x26137a = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x26137a && (_0x26137a(),
            _0x26137a = undefined);
        }, ![]);
        var _0x19cbbb = $ButtonTA['DEFAULT'];
        Object['defineProperty'](this, '_state', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x19cbbb;
            },
            'set': function(_0x19258b) {
                _0x19cbbb = _0x19258b;
                switch (_0x19258b) {
                case $ButtonTA['DEFAULT']:
                    this['_background'] = this['_defaultBackgroundColor'],
                    this['_color'] = this['_defaultForegroundColor'],
                    _0x4bb3fa['_node']['style']['opacity'] = 0x0;
                    break;
                case $ButtonTA['FOCUSED']:
                    this['_background'] = this['_focusBackgroundColor'],
                    this['_color'] = this['_focusForegroundColor'],
                    _0x4bb3fa['_node']['style']['opacity'] = 0x0;
                    break;
                case $ButtonTA['ACTIVE']:
                    this['_background'] = this['_activeBackgroundColor'],
                    this['_color'] = this['_activeForegroundColor'],
                    _0x4bb3fa['_node']['style']['opacity'] = 0x1;
                    break;
                }
            }
        }),
        this['click'] = function(_0x40c864) {
            if (TRANSITION)
                _0x26137a = _0x40c864,
                this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = 'click';
            else {
                if (_0x40c864)
                    _0x40c864();
            }
        }
        ;
    }
    return _0x5ac156['prototype'] = Object['create']($Label['prototype']),
    _0x5ac156['prototype']['constructor'] = _0x5ac156,
    _0x5ac156['DEFAULT'] = 0x0,
    _0x5ac156['FOCUSED'] = 0x1,
    _0x5ac156['ACTIVE'] = 0x2,
    _0x5ac156;
}()
  , $SceneError = function() {
    function _0x4967bc() {
        $Widget['call'](this),
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        this['_className'] = 'SceneError',
        this['_background'] = '#159361',
        this['_node']['style']['display'] = 'none';
        var _0x283790 = ![]
          , _0x3feadb = function(_0x1dcb26) {
            switch (_0x1dcb26['keyCode']) {
            case KeyEvent['VK_ENTER']:
                $ReaService['dispose'](),
                this['_visible'] = ![];
                break;
            }
        }
        ['bind'](this);
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x283790;
            },
            'set': function(_0x250a76) {
                _0x283790 = _0x250a76,
                this['_node']['style']['display'] = _0x250a76 ? 'block' : 'none',
                this['_keyListener'] = _0x250a76 ? _0x3feadb : undefined;
            }
        });
        var _0x46fd2 = new $Svg('<svg\x20width=\x22500\x22\x20height=\x22160\x22\x20viewBox=\x220\x200\x20500\x20160\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>' + '<g\x20fill-rule=\x22nonzero\x22\x20fill=\x22none\x22>' + '\x20\x20\x20\x20<g\x20opacity=\x22.6\x22\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M106.35\x2073.42c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm-9\x200c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM132.83\x2073.42c0-1.49\x201.2-2.7\x202.7-2.7\x201.49\x200\x202.69\x201.21\x202.69\x202.7a2.695\x202.695\x200\x201\x201-5.39\x200zm-9\x200c0-1.49\x201.2-2.7\x202.69-2.7\x201.5\x200\x202.71\x201.21\x202.71\x202.7\x200\x201.49-1.21\x202.7-2.71\x202.7-1.49\x200-2.69-1.21-2.69-2.7zM115.1\x20107.42c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM156\x20106.95c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.2\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.2\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM155.81\x2082.2c0-1.49\x201.2-2.7\x202.7-2.7a2.7\x202.7\x200\x200\x201\x202.69\x202.7\x202.695\x202.695\x200\x201\x201-5.39\x200zM155.81\x2073.7c0-1.49\x201.2-2.7\x202.7-2.7a2.7\x202.7\x200\x200\x201\x202.69\x202.7c0\x201.5-1.21\x202.7-2.69\x202.7-1.5\x200-2.7-1.2-2.7-2.7zM137.66\x20104.12a2.713\x202.713\x200\x200\x201-1.82-3.36\x202.709\x202.709\x200\x200\x201\x203.36-1.82c1.43.43\x202.24\x201.93\x201.82\x203.36a2.712\x202.712\x200\x200\x201-2.59\x201.93c-.25\x200-.51-.04-.77-.11zM129.24\x2096.58a2.69\x202.69\x200\x200\x201\x201.69-3.42c1.41-.48\x202.94.27\x203.42\x201.68s-.27\x202.95-1.68\x203.43c-.29.1-.58.14-.87.14-1.13\x200-2.17-.7-2.56-1.83zM148.07\x2094.36a2.702\x202.702\x200\x200\x201-2.68-2.72h-.01s.01-.07.01-.11a2.7\x202.7\x200\x200\x201\x202.69-2.64c1.5\x200\x202.71\x201.21\x202.71\x202.71v.07a2.706\x202.706\x200\x200\x201-2.7\x202.69h-.02zM130.93\x2089.96a2.693\x202.693\x200\x200\x201-1.66-3.43\x202.705\x202.705\x200\x200\x201\x203.44-1.67c1.4.49\x202.15\x202.03\x201.66\x203.44a2.704\x202.704\x200\x200\x201-2.55\x201.81c-.29\x200-.59-.05-.89-.15zM143.23\x2085.71a2.69\x202.69\x200\x200\x201\x20.12-3.81\x202.69\x202.69\x200\x200\x201\x203.81.12\x202.7\x202.7\x200\x200\x201-.12\x203.81c-.53.49-1.19.74-1.85.74-.72\x200-1.44-.29-1.97-.86h.01zM135.83\x2082.39a2.69\x202.69\x200\x200\x201\x201.84-3.34c1.43-.42\x202.93.41\x203.35\x201.84.41\x201.43-.41\x202.93-1.85\x203.34-.25.08-.5.11-.75.11a2.7\x202.7\x200\x200\x201-2.59-1.95zM180.04\x20107.79c-.3-1.46.64-2.89\x202.1-3.19\x201.46-.3\x202.89.64\x203.19\x202.1a2.7\x202.7\x200\x200\x201-2.11\x203.19c-.18.04-.36.06-.54.06-1.26\x200-2.38-.88-2.64-2.16zM178.04\x2098.67c-.34-1.45.56-2.9\x202.01-3.24\x201.45-.34\x202.9.55\x203.25\x202.01.34\x201.45-.56\x202.9-2.01\x203.24-.21.05-.42.08-.62.08-1.23\x200-2.34-.84-2.63-2.09zM156\x2090.38c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.71\x201.21\x202.71\x202.7\x200\x201.49-1.21\x202.7-2.71\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM164.86\x2090.38c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.71\x201.21\x202.71\x202.7\x200\x201.49-1.21\x202.7-2.71\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM175.6\x2092.92a2.686\x202.686\x200\x200\x201-1.63-3.45c.5-1.41\x202.04-2.14\x203.45-1.63\x201.4.5\x202.13\x202.05\x201.63\x203.45-.4\x201.1-1.44\x201.79-2.54\x201.79-.31\x200-.61-.05-.91-.16zM178.52\x2082.2c0-1.5\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.2\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM175.59\x2076.84a2.699\x202.699\x200\x200\x201\x201.82-5.08c1.4.5\x202.13\x202.04\x201.63\x203.44a2.691\x202.691\x200\x200\x201-2.54\x201.8c-.3\x200-.61-.05-.91-.16zM164.86\x2073.72c0-1.49\x201.21-2.7\x202.71-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.5\x200-2.71-1.21-2.71-2.7zM137.22\x20121.85a2.712\x202.712\x200\x200\x201\x202.56-2.84\x202.705\x202.705\x200\x200\x201\x202.84\x202.56\x202.697\x202.697\x200\x200\x201-2.56\x202.83h-.14c-1.43\x200-2.62-1.12-2.7-2.56v.01zM131\x20122.94c-1.37-.59-2-2.18-1.41-3.55.6-1.37\x202.19-2\x203.56-1.4\x201.36.59\x201.99\x202.18\x201.4\x203.55a2.706\x202.706\x200\x200\x201-2.48\x201.62c-.36\x200-.73-.07-1.08-.22h.01zM145.19\x20120.22a2.694\x202.694\x200\x200\x201-1.05-3.67c.72-1.3\x202.36-1.77\x203.66-1.05\x201.31.72\x201.78\x202.36\x201.06\x203.67-.49.89-1.41\x201.39-2.36\x201.39-.45\x200-.89-.11-1.31-.34zM145.08\x20110.06c0-1.49\x201.21-2.7\x202.71-2.7\x201.48\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.22\x202.7-2.7\x202.7-1.5\x200-2.71-1.21-2.71-2.7zM145.08\x20101.52c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M204.124\x20152.52a2.698\x202.698\x200\x200\x200\x200-3.81\x202.692\x202.692\x200\x200\x200-3.82\x200\x202.71\x202.71\x200\x200\x200\x200\x203.82c.53.53\x201.22.79\x201.91.79s1.38-.26\x201.91-.79v-.01zm-6.37-6.36a2.7\x202.7\x200\x200\x200\x20.01-3.82\x202.71\x202.71\x200\x200\x200-3.82\x200\x202.692\x202.692\x200\x200\x200\x200\x203.82\x202.69\x202.69\x200\x200\x200\x203.81\x200zM63.644\x20121.04c.72\x200\x201.41-.29\x201.92-.79.5-.5.79-1.2.79-1.91s-.29-1.41-.79-1.91a3.12\x203.12\x200\x200\x200-.41-.33c-.15-.1-.31-.19-.47-.25-.16-.07-.33-.12-.51-.16-.88-.17-1.81.12-2.43.74-.51.5-.79\x201.2-.79\x201.91s.28\x201.41.79\x201.91c.5.5\x201.2.79\x201.9.79zM75.404\x20138.11c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.2-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.5\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.2-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.5\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm7.85.29c1.02-1.09.98-2.8-.1-3.82-1.09-1.02-2.8-.98-3.82.1a2.702\x202.702\x200\x200\x200\x20.1\x203.82c.52.5\x201.19.74\x201.86.74.71\x200\x201.43-.28\x201.96-.84zm-153.57.03c1.14-.95\x201.29-2.66.34-3.8a2.718\x202.718\x200\x200\x200-3.81-.34\x202.707\x202.707\x200\x200\x200-.33\x203.81c.53.64\x201.3.96\x202.07.96.61\x200\x201.22-.2\x201.73-.63zm155.01-10.77c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm-154.58-.24c0-1.49-1.21-2.7-2.71-2.7-1.49\x200-2.69\x201.21-2.69\x202.7\x200\x201.49\x201.2\x202.7\x202.69\x202.7\x201.5\x200\x202.71-1.21\x202.71-2.7zm154.58-8.84c0-1.5-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.2-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm-154.58-9.09c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.5\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.2\x202.7-2.7zm0-9.08c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm0-9.08c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm154.58-27.25c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm0-9.08c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm-1.67-6.88a2.702\x202.702\x200\x200\x200-3.6-4.03c-1.11\x201-1.2\x202.7-.21\x203.81.53.6\x201.27.9\x202.01.9.64\x200\x201.29-.22\x201.8-.68zm-108.14-3.01c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.69\x201.21-2.69\x202.7\x200\x201.49\x201.2\x202.7\x202.69\x202.7s2.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.1\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.2-2.7-2.69-2.7-1.5\x200-2.71\x201.21-2.71\x202.7\x200\x201.49\x201.21\x202.7\x202.71\x202.7\x201.49\x200\x202.69-1.21\x202.69-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.1\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.12\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zM81.544\x20152.52a2.71\x202.71\x200\x200\x200\x200-3.82\x202.71\x202.71\x200\x200\x200-3.82\x200\x202.68\x202.68\x200\x200\x200\x200\x203.81c.53.53\x201.22.79\x201.91.79s1.38-.26\x201.91-.79v.01zm6.36-6.36a2.692\x202.692\x200\x200\x200\x200-3.82\x202.71\x202.71\x200\x200\x200-3.82\x200\x202.71\x202.71\x200\x200\x200\x200\x203.82c.53.52\x201.22.79\x201.91.79s1.38-.27\x201.91-.79z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M62.454\x2072.17c.66\x200\x201.3-.26\x201.77-.73.12-.11.22-.24.31-.38.09-.13.17-.28.23-.43a2.626\x202.626\x200\x200\x200\x20.19-.96c0-.16-.02-.33-.05-.49-.03-.16-.08-.31-.14-.46-.06-.16-.14-.3-.23-.44-.09-.13-.19-.26-.31-.38-.11-.11-.24-.22-.38-.31-.13-.09-.28-.16-.43-.23a2.522\x202.522\x200\x200\x200-2.73.54c-.11.12-.22.25-.31.38-.09.14-.16.28-.23.44-.06.15-.11.3-.14.46-.03.16-.05.33-.05.49a2.626\x202.626\x200\x200\x200\x20.19.96c.07.15.14.3.23.43.09.14.2.27.31.38.12.12.25.22.38.31a2.638\x202.638\x200\x200\x200\x20.9.37c.16.04.33.05.49.05zM56.924\x2064.6c.87-1.07.71-2.64-.36-3.51a2.483\x202.483\x200\x200\x200-3.51.35c-.88\x201.07-.72\x202.64.35\x203.52.46.38\x201.02.56\x201.58.56a2.5\x202.5\x200\x200\x200\x201.94-.92zm-7.83-6.22c.86-1.08.69-2.66-.39-3.52a2.495\x202.495\x200\x200\x200-3.51.39c-.87\x201.08-.69\x202.65.38\x203.51.47.37\x201.02.55\x201.57.55.73\x200\x201.46-.32\x201.95-.93zm-7.67-6.44c1.05-.89\x201.19-2.47.31-3.52a2.505\x202.505\x200\x200\x200-3.53-.31\x202.502\x202.502\x200\x200\x200-.3\x203.52c.49.59\x201.2.9\x201.91.9.57\x200\x201.14-.2\x201.61-.59zm-5.49-8.35a2.502\x202.502\x200\x200\x200\x202.14-2.82\x202.495\x202.495\x200\x200\x200-2.82-2.13\x202.493\x202.493\x200\x200\x200-2.14\x202.81\x202.506\x202.506\x200\x200\x200\x202.48\x202.16c.11\x200\x20.23\x200\x20.34-.02zm3.79-10.78c.72-1.18.35-2.72-.83-3.44a2.505\x202.505\x200\x200\x200-3.44.84c-.71\x201.17-.34\x202.71.84\x203.43.41.25.85.37\x201.3.37.84\x200\x201.66-.43\x202.13-1.2zm17.71-5.59a2.502\x202.502\x200\x200\x200-4.63-1.9c-.52\x201.28.09\x202.74\x201.36\x203.26a2.5\x202.5\x200\x200\x200\x203.27-1.36zm-11.44.71a2.489\x202.489\x200\x200\x200\x201.73-3.08\x202.497\x202.497\x200\x200\x200-3.08-1.73c-1.33.38-2.1\x201.76-1.73\x203.09.31\x201.1\x201.31\x201.82\x202.4\x201.82.23\x200\x20.46-.03.68-.1zM62.464\x2035.3c.65\x200\x201.3-.27\x201.77-.73.46-.47.73-1.11.73-1.77\x200-.66-.27-1.3-.73-1.77-.12-.11-.25-.22-.38-.31-.14-.09-.28-.17-.44-.23-.15-.06-.3-.11-.46-.14-.33-.07-.66-.07-.98\x200-.16.03-.32.08-.47.14-.15.06-.29.14-.43.23s-.26.2-.38.31c-.46.47-.73\x201.11-.73\x201.77\x200\x20.66.27\x201.3.73\x201.77.12.11.24.22.38.31s.28.17.43.23c.15.06.31.11.47.14.16.04.32.05.49.05zM71.544\x2064.93c1.07-.87\x201.23-2.45.35-3.52-.87-1.07-2.45-1.22-3.52-.35a2.501\x202.501\x200\x200\x200-.35\x203.51c.49.61\x201.21.93\x201.94.93.55\x200\x201.11-.19\x201.58-.57zm7.82-6.19c1.08-.86\x201.25-2.44.39-3.51a2.487\x202.487\x200\x200\x200-3.51-.39\x202.495\x202.495\x200\x200\x200-.39\x203.51c.49.62\x201.22.94\x201.95.94.55\x200\x201.1-.18\x201.56-.55zm7.68-7.14c.88-1.06.74-2.64-.32-3.52a2.494\x202.494\x200\x200\x200-3.52.31\x202.51\x202.51\x200\x200\x200\x20.31\x203.52c.47.39\x201.04.59\x201.61.59.71\x200\x201.42-.31\x201.92-.9zm4.76-10.18c.19-1.37-.77-2.63-2.14-2.82-1.37-.19-2.63.77-2.81\x202.14a2.48\x202.48\x200\x200\x200\x202.13\x202.81c.12.02.23.03.34.03\x201.23\x200\x202.31-.91\x202.48-2.16zm-3.2-7.81c1.18-.72\x201.55-2.26.83-3.44a2.508\x202.508\x200\x200\x200-3.44-.82\x202.498\x202.498\x200\x200\x200-.82\x203.43c.47.77\x201.29\x201.2\x202.13\x201.2.45\x200\x20.9-.12\x201.3-.37zm-17.88-5.01a2.51\x202.51\x200\x200\x200\x201.36-3.27\x202.51\x202.51\x200\x200\x200-3.27-1.36c-1.27.53-1.88\x202-1.35\x203.27.39.96\x201.33\x201.55\x202.31\x201.55.32\x200\x20.64-.07.95-.19zm11.25-2.41c.37-1.33-.41-2.71-1.74-3.08-1.33-.37-2.71.41-3.08\x201.74-.37\x201.33.41\x202.71\x201.74\x203.08a2.505\x202.505\x200\x200\x200\x203.08-1.74z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20<path\x20d=\x22M281.24\x2065.34a2.5\x202.5\x200\x200\x201-2.5-2.5V48.26c0-1.47.57-2.85\x201.61-3.89a5.46\x205.46\x200\x200\x201\x203.89-1.61h81.38a2.5\x202.5\x200\x200\x201\x200\x205h-81.38c-.17\x200-.28.08-.35.15-.07.07-.15.18-.15.35v14.58a2.5\x202.5\x200\x200\x201-2.5\x202.5zM435.78\x2092.57a2.5\x202.5\x200\x200\x200-2.5\x202.5v39.36c0\x20.69-.56\x201.25-1.29\x201.25H284.98c-.69\x200-1.25-.56-1.25-1.25v-13.59a2.5\x202.5\x200\x200\x200-5\x200v13.59c0\x203.44\x202.8\x206.25\x206.25\x206.25h22.28l-5.99\x205.99a2.499\x202.499\x200\x200\x200\x201.77\x204.27c.64\x200\x201.28-.24\x201.77-.73l9.52-9.53h88.33l9.52\x209.53c.49.49\x201.13.73\x201.77.73a2.499\x202.499\x200\x200\x200\x201.77-4.27l-5.99-5.99h22.29c3.44\x200\x206.25-2.8\x206.25-6.25V95.07a2.5\x202.5\x200\x200\x200-2.5-2.5h.01z\x22\x20fill=\x22#FFF\x22/>' + '\x20\x20\x20\x20<g\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M342.67\x2075.32c1.24\x200\x202.25-1.01\x202.25-2.25s-1.01-2.25-2.25-2.25h-23.5c-1.24\x200-2.25\x201.01-2.25\x202.25s1.01\x202.25\x202.25\x202.25h9.5v31.81c0\x201.24\x201.01\x202.25\x202.25\x202.25s2.25-1.01\x202.25-2.25V75.32h9.5zM363.16\x2080.42c0-1.24-1.01-2.25-2.25-2.25s-2.25\x201.01-2.25\x202.25v.65c-1.76-1.48-3.92-2.36-6.25-2.36-5.93\x200-10.75\x205.62-10.75\x2012.54\x200\x206.92\x204.82\x2012.54\x2010.75\x2012.54\x202.33\x200\x204.49-.88\x206.25-2.36v2.07c0\x20.04.22\x203.68-1.78\x205.82-1.03\x201.1-2.49\x201.63-4.48\x201.63-3.18\x200-5.18-.58-6.31-1.07-1.14-.5-2.47.03-2.96\x201.17-.5\x201.14.03\x202.46\x201.17\x202.96\x201.52.66\x204.15\x201.44\x208.1\x201.44\x203.27\x200\x205.89-1.04\x207.79-3.08\x203.12-3.37\x203-8.3\x202.96-9.09V80.43l.01-.01zm-10.75\x2018.87c-3.45\x200-6.25-3.61-6.25-8.04s2.8-8.04\x206.25-8.04\x206.25\x203.61\x206.25\x208.04-2.8\x208.04-6.25\x208.04zM387.52\x2088.71c2.56-1.54\x204.37-4.2\x204.37-8.12\x200-6.75-5.35-9.77-10.65-9.77h-9.62c-1.24\x200-2.25\x201.01-2.25\x202.25\x200\x20.05.01.09.01.14\x200\x20.05-.01.09-.01.14v33.78c0\x201.24\x201.01\x202.25\x202.25\x202.25s2.25-1.01\x202.25-2.25V90.35h8.39c.33.06\x202.54.6\x203.45\x205.21\x201.31\x206.67\x201.69\x2011.69\x201.69\x2011.74a2.256\x202.256\x200\x200\x200\x202.24\x202.09h.17a2.251\x202.251\x200\x200\x200\x202.08-2.41c-.02-.21-.4-5.33-1.76-12.28-.55-2.78-1.52-4.68-2.61-5.99zm-13.65-13.39h7.37c3.91\x200\x206.15\x201.92\x206.15\x205.27\x200\x203.35-2.24\x205.27-6.15\x205.27h-7.37V75.32z\x22/>' + '\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20<path\x20d=\x22M283.32\x2094.69s.01-.03.02-.04c.04-.06.07-.13.1-.19l.02-.04c.03-.05.06-.1.08-.15\x200-.01\x200-.03.01-.04.03-.07.05-.15.07-.22.02-.07.05-.13.06-.2v-.05c.01-.08.02-.15.02-.23\x200-.07.02-.15.02-.22v-.04c0-.07-.01-.15-.02-.22\x200-.08-.01-.15-.02-.23v-.04c-.01-.07-.04-.13-.06-.2-.02-.07-.04-.15-.07-.22\x200-.01\x200-.03-.01-.04-.03-.07-.07-.13-.1-.19-.04-.07-.07-.13-.11-.2\x200-.01-.01-.02-.02-.04-.03-.05-.08-.09-.12-.14-.02-.02-.03-.04-.05-.06-.04-.04-.06-.09-.1-.13l-17.9-18.53a2.496\x202.496\x200\x200\x200-3.53-.06c-.99.96-1.02\x202.54-.06\x203.54l13.8\x2014.29h-57.61c-1.38\x200-2.5\x201.11-2.5\x202.49a2.5\x202.5\x200\x200\x200\x202.5\x202.5h57.61l-13.8\x2014.3c-.96.99-.93\x202.58.06\x203.54.49.47\x201.11.7\x201.74.7.63\x200\x201.31-.25\x201.8-.76l17.87-18.49.03-.03.09-.12c.03-.03.06-.07.09-.11.03-.04.07-.07.09-.11v-.02zM453.7\x2068.58l-9.04-28.5c4.21-2.85\x206.98-7.67\x206.98-13.13\x200-8.73-7.1-15.84-15.84-15.84s-15.84\x207.1-15.84\x2015.84c0\x205.46\x202.77\x2010.28\x206.98\x2013.13l-9.04\x2028.5c-.42\x201.32.31\x202.72\x201.63\x203.14.25.08.51.12.76.12\x201.06\x200\x202.04-.68\x202.38-1.75l3.51-11.07h19.23l3.51\x2011.07a2.512\x202.512\x200\x200\x200\x202.38\x201.75\x202.505\x202.505\x200\x200\x200\x202.39-3.26h.01zm-17.89-52.46c5.98\x200\x2010.84\x204.86\x2010.84\x2010.84\x200\x205.98-4.86\x2010.84-10.84\x2010.84-5.98\x200-10.84-4.86-10.84-10.84\x200-5.98\x204.86-10.84\x2010.84-10.84zm-8.03\x2037.9\x203.75-11.83c1.36.38\x202.79.6\x204.28.6\x201.49\x200\x202.91-.22\x204.28-.6l3.75\x2011.83h-16.06z\x22\x20fill=\x22#00EE8E\x22/>' + '\x20\x20\x20\x20<g\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M410.9\x2041.64c-.91\x200-1.79-.5-2.23-1.38-2.13-4.22-3.2-8.76-3.2-13.52\x200-4.24.86-8.33\x202.57-12.17a2.503\x202.503\x200\x200\x201\x203.3-1.27c1.26.56\x201.83\x202.04\x201.27\x203.3-1.42\x203.2-2.14\x206.61-2.14\x2010.15\x200\x203.96.9\x207.75\x202.67\x2011.26a2.5\x202.5\x200\x200\x201-1.11\x203.36c-.36.18-.75.27-1.12.27h-.01zM397.49\x2047.69c-.93\x200-1.82-.52-2.25-1.41-2.97-6.12-4.48-12.69-4.48-19.53\x200-6.45\x201.34-12.68\x203.99-18.5a2.496\x202.496\x200\x200\x201\x203.31-1.24c1.26.57\x201.81\x202.05\x201.24\x203.31-2.35\x205.17-3.54\x2010.7-3.54\x2016.43\x200\x206.08\x201.34\x2011.92\x203.97\x2017.35a2.496\x202.496\x200\x200\x201-2.25\x203.59h.01z\x22/>' + '\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20<g\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M460.36\x2041.64a2.505\x202.505\x200\x200\x201-2.23-3.63c1.77-3.51\x202.67-7.3\x202.67-11.26\x200-3.53-.72-6.95-2.14-10.15-.56-1.26\x200-2.74\x201.27-3.3\x201.26-.56\x202.74\x200\x203.3\x201.27a29.9\x2029.9\x200\x200\x201\x202.57\x2012.17c0\x204.75-1.08\x209.3-3.2\x2013.52-.44.87-1.32\x201.38-2.23\x201.38h-.01zM473.76\x2047.69a2.504\x202.504\x200\x200\x201-2.25-3.59c2.64-5.43\x203.97-11.27\x203.97-17.35\x200-5.73-1.19-11.26-3.55-16.43a2.496\x202.496\x200\x200\x201\x201.24-3.31c1.26-.58\x202.74-.02\x203.31\x201.24\x202.65\x205.83\x203.99\x2012.05\x203.99\x2018.5\x200\x206.85-1.51\x2013.42-4.48\x2019.53-.43.89-1.32\x201.41-2.25\x201.41h.02z\x22/>' + '\x20\x20\x20\x20</g></g></svg>');
        _0x46fd2['_bounds'] = {
            'top': 0x124,
            'left': 0x2e8,
            'width': 0x1f4,
            'height': 0xa0
        };
        var _0x2c13d5 = new $Widget();
        _0x2c13d5['_bounds'] = {
            'left': 0x202,
            'top': 0x1ec,
            'width': 0x3c0,
            'height': 0x80
        },
        _0x2c13d5['_font'] = '52px\x20PublicSans-Regular',
        _0x2c13d5['_color'] = '#fff',
        _0x2c13d5['_node']['style']['lineHeight'] = '64px',
        _0x2c13d5['_node']['style']['letterSpacing'] = '-1.6px',
        _0x2c13d5['_node']['style']['textAlign'] = 'center';
        var _0x12e939 = new $Button0();
        _0x12e939['_bounds'] = {
            'left': 0x31a,
            'top': 0x2d0,
            'width': 0x190,
            'height': 0x44
        },
        _0x12e939['_focusedBackground'] = '#fff',
        _0x12e939['_focusedColor'] = '#159361',
        _0x12e939['_text'] = 'Torna\x20alla\x20diretta\x20predefinita',
        _0x12e939['_font'] = '24px\x20PublicSans-Bold',
        _0x12e939['_focused'] = !![],
        Object['defineProperty'](this, '_title', {
            'get': function() {},
            'set': function(_0x14b70c) {
                _0x2c13d5['_node']['innerHTML'] = _0x14b70c || 'La\x20redazione\x20che\x20hai\x20scelto<br/>non\x20è\x20disponibile.';
            }
        }),
        this['append'](_0x46fd2),
        this['append'](_0x2c13d5),
        this['append'](_0x12e939),
        this['visibleTrigger'] = function(_0x20c8ba, _0x43d95e) {
            this['_visible'] = _0x20c8ba,
            _0x43d95e && _0x43d95e();
        }
        ;
    }
    return _0x4967bc['prototype'] = Object['create']($Widget['prototype']),
    _0x4967bc['prototype']['constructor'] = _0x4967bc,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x4967bc()),
            this['instance'];
        }
    };
}()
  , $BannerLancioApp = function() {
    function _0x2c7ee2() {
        $Widget['call'](this),
        this['_className'] = 'BannerLancioApp';
        var _0x52533f = 0x0;
        if ($DEVICE['userAgentInfo']) {
            var _0x13d8e4 = $DEVICE['userAgentInfo']['version'];
            if (_0x13d8e4) {
                var _0x15bba2 = _0x13d8e4['replace'](/\./gm, '');
                _0x15bba2 = parseInt(_0x15bba2);
                if (_0x15bba2 <= 0x8c)
                    _0x52533f = 0x3e8;
            }
        }
        this['_bounds'] = {
            'left': 0x4da + _0x52533f,
            'top': 0x3b8,
            'width': 0x2a7,
            'height': 0x9e
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x2a527b = '<svg\x20class=\x22pippo\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22679\x22\x20height=\x22158\x22\x20viewBox=\x220\x200\x20679\x20158\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x2220e5qvd12a\x22\x20x1=\x22100%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#000063\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#000098\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22aqwactkhzb\x22\x20x1=\x220%\x22\x20x2=\x2252.694%\x22\x20y1=\x220%\x22\x20y2=\x2252.643%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#FFF\x22\x20stop-opacity=\x22.9\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#FFF\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#20e5qvd12a)\x22\x20d=\x22M29\x2030H638V118H29z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2279\x22\x20y=\x2286\x22>Premi\x20il\x20</tspan>\x20<tspan\x20x=\x22182.74\x22\x20y=\x2286\x22\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-weight=\x22600\x22>tasto\x20su\x20</tspan>\x20<tspan\x20x=\x22331.095\x22\x20y=\x2286\x22\x20font-family=\x22PublicSans-Bold,\x20Public\x20Sans\x22\x20font-weight=\x22bold\x22>\x20</tspan>\x20<tspan\x20x=\x22336.455\x22\x20y=\x2286\x22>per\x20aprire</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FFF\x22\x20d=\x22M312.129\x2076.255l9.602\x2010.22c.142.15.135.387-.016.53l-.014.012-2.226\x201.891c-.152.13-.38.117-.516-.03L307.1\x2076.257c-.135-.144-.135-.37\x200-.514l11.859-12.624c.137-.145.364-.158.516-.029L322\x2065.236l-9.872\x2010.506c-.136.144-.136.369\x200\x20.513z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x20rotate(90\x20314.5\x2075.999)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FFF\x22\x20d=\x22M587.688\x2074.574h-5.732v-5.731h-3.771v5.731h-5.732v3.772h5.732v5.731h3.771v-5.731h5.732v-3.772zm-74.578-.385c-1.921\x200-3.038\x201.376-3.038\x203.012\x200\x201.688\x201.117\x202.987\x203.038\x202.987\x201.922\x200\x203.038-1.3\x203.038-2.987\x200-1.636-1.116-3.012-3.038-3.012zM484\x2099h49.997V49H484v50zm15.675-15.151l-4.803-7.53h-.053v7.53h-5.09v-19.58h7.61c3.869\x200\x206.803\x201.843\x206.803\x206.024\x200\x202.701-1.506\x205.038-4.285\x205.532l6.155\x208.024h-6.337zm21.044\x200h-4.726v-1.48h-.053c-.83\x201.324-2.466\x201.921-4.024\x201.921-3.948\x200-6.726-3.298-6.726-7.115s2.727-7.09\x206.674-7.09c1.532\x200\x203.142.572\x204.13\x201.74v-1.298h4.725V83.85zm2.72\x200h4.727V70.527h-4.727V83.85zm2.364-15.789c-1.454\x200-2.65-1.195-2.65-2.649s1.196-2.648\x202.65-2.648\x202.648\x201.194\x202.648\x202.648c0\x201.454-1.194\x202.649-2.648\x202.649zm-30.49.104h-.494v4.882h.494c1.661\x200\x203.531-.312\x203.531-2.441\x200-2.13-1.87-2.441-3.531-2.441zm69.569\x204.536v-3.945h6.876V72.7h-1.315l-4.219\x2011.094h-4.356L557.705\x2072.7h-1.315v-3.945h6.958V72.7h-1.178l1.917\x205.89\x201.973-5.89h-1.178zm-13.15\x207.067v4.027h-8.464v-4.027h1.89v-11.45h-1.808v2.657h-3.506v-6.657h15.395v6.657h-3.479v-2.657h-1.808v11.45h1.78z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#aqwactkhzb)\x22\x20d=\x22M638.065\x20118H678.065V158H638.065z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20fill-opacity=\x22.9\x22\x20d=\x22M608\x2030H638V60H608z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20d=\x22M0\x200H30V30H0z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '</svg>'
          , _0x221684 = new $Widget(_0x2a527b);
        this['append'](_0x221684);
        var _0x32e9b4 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x32e9b4 && (_0x32e9b4(),
            _0x32e9b4 = undefined);
        }, ![]);
        var _0x53671c = function(_0x776329) {
            if (localStorage && localStorage['length'] === 0x0)
                return;
            switch (_0x776329['keyCode']) {
            case KeyEvent['VK_UP']:
                $Gui['getInstance']()['_loadingFlag'] = !![],
                this['visibleTrigger'](![], function() {
                    var _0x20eb80 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x20eb80)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x1bca77 = $BannerPrivacy['getInstance']();
                        _0x1bca77['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x982ebc() {
                                    var _0x287779 = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x287779);
                                    _0x287779['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x982ebc);
                            });
                        }
                        ,
                        _0x1bca77['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x1bca77);
                    } else
                        $MISC['loadMainJS'](function() {
                            function _0x32807d() {
                                var _0x3a0a9b = $Scene0['getInstance']();
                                if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                    $Gui['getInstance']()['append'](_0x3a0a9b);
                                _0x3a0a9b['visibleTrigger'](!![], function() {
                                    $Gui['getInstance']()['_loadingFlag'] = ![];
                                });
                            }
                            $Gui['getInstance']()['onInfoLoad'](_0x32807d);
                        });
                });
                break;
            case KeyEvent['VK_BACK']:
                $Gui['getInstance']()['_loadingFlag'] = !![],
                this['visibleTrigger'](![], function() {
                    var _0x573d1d = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x573d1d)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x10b1f4 = $BannerPrivacy['getInstance']();
                        _0x10b1f4['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x1ddf41() {
                                    var _0x16dedd = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x16dedd);
                                    _0x16dedd['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x1ddf41);
                            });
                        }
                        ,
                        _0x10b1f4['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x10b1f4);
                    } else
                        $MISC['loadMainJS'](function() {
                            function _0x1dc0a2() {
                                var _0x31aa8a = $Scene0['getInstance']();
                                if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                    $Gui['getInstance']()['append'](_0x31aa8a);
                                var _0xcac7f9 = EPG['getEpg']()['type'] === 'tv' ? 0x2 : 0x3
                                  , _0x42beed = [undefined, undefined, 'CanaliTv', 'CanaliRadio'][_0xcac7f9]
                                  , _0x422e42 = $Scene0['getInstance']()['getChildrenByClassName'](_0x42beed)[0x0]
                                  , _0x31c156 = _0x422e42['getChildrenByClassName']('Menu0')[0x0];
                                _0x31c156['_focused'] = !![],
                                _0x31aa8a['_activeSectionIndex'] = _0xcac7f9,
                                $Scene0['getInstance']()['_menu']['_focused'] = ![],
                                setTimeout(function() {
                                    _0x31aa8a['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }, 0x64);
                            }
                            $Gui['getInstance']()['onInfoLoad'](_0x1dc0a2);
                        });
                });
                break;
            case KeyEvent['VK_DOWN']:
                this['_visible'] = ![];
                break;
            }
        }
        ['bind'](this)
          , _0xd2ac4d = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0xd638f7) {
                _0xd638f7 !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0xd638f7 ? 'bannerAppOn' : 'bannerAppOff'),
                this['_top'] = _0xd638f7 ? 0x39a : 0x3b8,
                this['_node']['style']['opacity'] = _0xd638f7 ? 0x1 : 0x0,
                this['_keyListener'] = _0xd638f7 ? _0x53671c : undefined,
                _0xd638f7 ? (_0xd2ac4d = setTimeout(function() {
                    $BannerLancioApp['getInstance']()['visibleTrigger'](![], function() {
                        var _0x255ff6 = $BannerLancioRaiPlay['getInstance']();
                        if (!$Gui['getInstance']()['getChildrenByClassName']('BannerLancioRaiPlay'))
                            $Gui['getInstance']()['append'](_0x255ff6);
                        _0x255ff6['_visible'] = !![];
                    });
                }, 0x2710),
                $WebTrekk['track']($WebTrekk['events']['TVPLUS'])) : clearTimeout(_0xd2ac4d));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x2dd193, _0x549d31) {
            if (_0x32e9b4)
                _0x32e9b4();
            if (TRANSITION)
                _0x32e9b4 = _0x549d31,
                this['_visible'] = _0x2dd193;
            else
                _0x549d31 && (this['_visible'] = _0x2dd193,
                _0x549d31());
        }
        ,
        this['quickHide'] = function() {
            this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
            this['_node']['offsetWidth']),
            this['_top'] = 0x3b8,
            this['_node']['style']['opacity'] = 0x0,
            this['_keyListener'] = undefined,
            clearTimeout(_0xd2ac4d));
        }
        ;
    }
    return _0x2c7ee2['prototype'] = Object['create']($Widget['prototype']),
    _0x2c7ee2['prototype']['constructor'] = _0x2c7ee2,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x2c7ee2()),
            this['instance'];
        }
    };
}()
  , $BannerLancioRaiPlay = function() {
    function _0x184f80() {
        $Widget['call'](this),
        this['_className'] = 'BannerLancioRaiPlay';
        var _0x1152c6 = 0x0;
        if ($DEVICE['userAgentInfo']) {
            var _0x35b7a0 = $DEVICE['userAgentInfo']['version'];
            if (_0x35b7a0) {
                var _0x196d27 = _0x35b7a0['replace'](/\./gm, '');
                _0x196d27 = parseInt(_0x196d27);
                if (_0x196d27 <= 0x8c)
                    _0x1152c6 = 0x3e8;
            }
        }
        this['_bounds'] = {
            'left': 0x4ac + _0x1152c6,
            'top': 0x39a,
            'width': 0x2d4,
            'height': 0x9e
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x57e905 = '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22724\x22\x20height=\x22158\x22\x20viewBox=\x220\x200\x20724\x20158\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x225x9j0xxaca\x22\x20x1=\x2297.217%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#000032\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#00005E\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#5x9j0xxaca)\x22\x20d=\x22M30\x2030H684V118H30z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#18156D\x22\x20d=\x22M654\x2030H684V60H654z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2280\x22\x20y=\x2283\x22>Premi\x20il\x20</tspan>\x20<tspan\x20x=\x22183.74\x22\x20y=\x2283\x22\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-weight=\x22600\x22>tasto\x20blu\x20</tspan>\x20<tspan\x20x=\x22358.83\x22\x20y=\x2283\x22\x20font-family=\x22PublicSans-Bold,\x20Public\x20Sans\x22\x20font-weight=\x22bold\x22>\x20</tspan>\x20<tspan\x20x=\x22369.55\x22\x20y=\x2283\x22>per\x20aprire</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FFF\x22\x20d=\x22M567\x2049v50h-50V49h50zm58.543\x2019.575v4.068h-1.185l1.929\x206.074\x201.983-6.074h-1.185v-4.068H634v4.068h-1.322l-4.572\x2012.26h1.322V89h-7.052v-4.096h1.432l.275-.735-4.214-11.526h-1.323v-4.068h6.997zm-19.086-.254c2.038\x200\x203.498.65\x204.628\x202.175v-1.92h5.785v4.067h-1.653v7.344h1.653v4.097h-6.005V82.36c-1.02\x201.328-2.452\x201.95-4.408\x201.95-4.242\x200-7.41-3.334-7.41-7.995\x200-4.66\x203.168-7.995\x207.41-7.995zm-61.593\x201.765c-3.948\x200-6.674\x203.272-6.674\x207.09\x200\x203.816\x202.778\x207.114\x206.726\x207.114\x201.48\x200\x203.03-.539\x203.894-1.728l.13-.193h.053v1.48h4.726V70.527h-4.726v1.298c-.988-1.168-2.597-1.74-4.13-1.74zM581.429\x2064c2.066\x200\x203.637.141\x204.96\x201.1\x201.734\x201.244\x202.644\x203.136\x202.644\x205.651\x200\x202.119-.716\x203.87-2.176\x205.254-1.433\x201.356-3.251\x201.61-5.758\x201.61h-1.377v2.317h1.79v4.152H573v-4.152h1.9V68.123H573V64h8.43zm14.858\x200v15.987h1.9v4.097h-8.07v-4.097h1.9v-11.92h-1.846V64h6.116zm-65.948.269h-7.61v19.58h5.09v-7.53h.052l4.804\x207.53h6.336l-6.154-8.024c2.78-.494\x204.285-2.831\x204.285-5.532\x200-4.18-2.934-6.024-6.803-6.024zm30.827\x206.258h-4.726V83.85h4.726V70.527zM546.11\x2074.19c1.922\x200\x203.038\x201.376\x203.038\x203.012\x200\x201.688-1.116\x202.987-3.038\x202.987-1.922\x200-3.038-1.3-3.038-2.987\x200-1.636\x201.116-3.012\x203.038-3.012zm61.146-1.743c-2.094\x200-3.636\x201.61-3.636\x203.87s1.542\x203.87\x203.636\x203.87c2.094\x200\x203.636-1.61\x203.636-3.87s-1.542-3.87-3.636-3.87zm-26.24-3.926h-1.267v4.745h.882c2.369\x200\x203.526-.622\x203.526-2.43\x200-1.695-1.02-2.315-3.14-2.315zm-52.704-.356c1.663\x200\x203.532.312\x203.532\x202.441\x200\x202.06-1.75\x202.42-3.37\x202.44l-.162.001h-.493v-4.882h.493zm30.49-5.401c-1.453\x200-2.649\x201.194-2.649\x202.648\x200\x201.455\x201.196\x202.65\x202.65\x202.65s2.648-1.195\x202.648-2.65c0-1.454-1.194-2.648-2.648-2.648z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20stroke=\x22#9ADAFF\x22\x20stroke-width=\x222\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x20translate(316\x2060)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2228\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#9ADAFF\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2225\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#0099F2\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FC1F65\x22\x20d=\x22M684\x20118H724V158H684z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#42FFBB\x22\x20d=\x22M0\x200H30V30H0z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '</svg>'
          , _0xc52e05 = new $Widget(_0x57e905);
        this['append'](_0xc52e05);
        var _0x530996 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x530996 && (_0x530996(),
            _0x530996 = undefined);
        }, ![]);
        var _0xc14e1b = function(_0x2933d1) {
            if (localStorage && localStorage['length'] === 0x0)
                return;
            switch (_0x2933d1['keyCode']) {
            case KeyEvent['VK_UP']:
                $Gui['getInstance']()['_loadingFlag'] = !![],
                $BannerLancioRaiPlay['getInstance']()['visibleTrigger'](![], function() {
                    var _0x357657 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x357657)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0xd15c7a = $BannerPrivacy['getInstance']();
                        _0xd15c7a['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x45ab31() {
                                    var _0x329a5d = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x329a5d);
                                    _0x329a5d['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x45ab31);
                            });
                        }
                        ,
                        _0xd15c7a['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0xd15c7a);
                    } else
                        $MISC['loadMainJS'](function() {
                            function _0x3fcc75() {
                                var _0x1ae0a9 = $Scene0['getInstance']();
                                if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                    $Gui['getInstance']()['append'](_0x1ae0a9);
                                _0x1ae0a9['visibleTrigger'](!![], function() {
                                    $Gui['getInstance']()['_loadingFlag'] = ![];
                                });
                            }
                            $Gui['getInstance']()['onInfoLoad'](_0x3fcc75);
                        });
                });
                break;
            case KeyEvent['VK_DOWN']:
                this['_visible'] = ![];
                break;
            }
        }
          , _0x14e783 = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x5dac28) {
                _0x5dac28 !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x5dac28 ? 'bannerAppOn' : 'bannerAppOff'),
                this['_top'] = _0x5dac28 ? 0x39a : 0x3b8,
                this['_node']['style']['opacity'] = _0x5dac28 ? 0x1 : 0x0,
                this['_keyListener'] = _0x5dac28 ? _0xc14e1b : undefined,
                _0x5dac28 ? _0x14e783 = setTimeout(function() {
                    this['_visible'] = ![];
                }
                ['bind'](this), 0x1388) : clearTimeout(_0x14e783));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x11f3f1, _0x504ae8) {
            if (_0x530996)
                _0x530996();
            if (TRANSITION)
                _0x530996 = _0x504ae8,
                this['_visible'] = _0x11f3f1;
            else {
                if (_0x504ae8)
                    _0x504ae8();
            }
        }
        ,
        this['quickHide'] = function() {
            this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
            this['_node']['offsetWidth']),
            this['_top'] = 0x3b8,
            this['_node']['style']['opacity'] = 0x0,
            this['_keyListener'] = undefined,
            clearTimeout(_0x14e783));
        }
        ;
    }
    return _0x184f80['prototype'] = Object['create']($Widget['prototype']),
    _0x184f80['prototype']['constructor'] = _0x184f80,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x184f80()),
            this['instance'];
        }
    };
}()
  , $BannerSceltaTGR = function() {
    function _0x375aaf() {
        var _0x4519d3 = '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20width=\x221010\x22\x20height=\x22197\x22\x20viewBox=\x220\x200\x201010\x20197\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22wysuj9cc3b\x22\x20x1=\x2297.217%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#002C27\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#003831\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20id=\x22j4gcdnh8xa\x22\x20d=\x22M0\x200H917V88H0z\x22/>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20transform=\x22translate(-963\x20-952)\x20translate(963\x20952)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<mask\x20id=\x226v2mfck7pc\x22\x20fill=\x22#fff\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<use\x20xlink:href=\x22#j4gcdnh8xa\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</mask>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<use\x20fill=\x22url(#wysuj9cc3b)\x22\x20xlink:href=\x22#j4gcdnh8xa\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20mask=\x22url(#6v2mfck7pc)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00B56C\x22\x20fill-opacity=\x22.4\x22\x20d=\x22M6.25\x206.25H44.25V44.25H6.25z\x22\x20transform=\x22translate(-22.474\x20-6.22)\x20rotate(65\x2025.25\x2025.25)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<text\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20transform=\x22translate(-22.474\x20-6.22)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2272.474\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22>Premi\x20il\x20</tspan>\x20<tspan\x20x=\x22176.214\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-weight=\x22600\x22>tasto\x20verde\x20</tspan>\x20<tspan\x20x=\x22383.249\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Bold,\x20Public\x20Sans\x22\x20font-weight=\x22bold\x22>\x20</tspan>\x20<tspan\x20x=\x22393.969\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22>per\x20cambiare\x20l’Edizione\x20locale\x20del\x20TGR</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20stroke=\x22#009257\x22\x20stroke-width=\x222\x22\x20transform=\x22translate(-22.474\x20-6.22)\x20translate(339.474\x2036.22)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2228\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#009257\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2225\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#00E780\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#34E98E\x22\x20d=\x22M878.878\x2065.878H990.999V177.999H878.878z\x22\x20transform=\x22translate(-963\x20-952)\x20translate(963\x20952)\x20rotate(65\x20934.938\x20121.938)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00B56C\x22\x20d=\x22M906.938\x2093.938H962.938V149.938H906.938z\x22\x20transform=\x22translate(-963\x20-952)\x20translate(963\x20952)\x20rotate(45\x20934.938\x20121.938)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '</svg>';
        $Widget['call'](this, _0x4519d3),
        this['_className'] = 'BannerSceltaTGR',
        this['_bounds'] = {
            'left': 0x3c0,
            'top': 0x3b8,
            'width': 0x3bd,
            'height': 0x80
        };
    }
    return _0x375aaf['prototype'] = Object['create']($Widget['prototype']),
    _0x375aaf['prototype']['constructor'] = _0x375aaf,
    _0x375aaf;
}()
  , $BannerCaricamento = function() {
    function _0x326fb3() {
        var _0x1094b8 = '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22309\x22\x20height=\x22128\x22\x20viewBox=\x220\x200\x20279\x20128\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x223qp69ujf5a\x22\x20x1=\x22100%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#000063\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#000098\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x221mp2zr6y1b\x22\x20x1=\x220%\x22\x20x2=\x2252.694%\x22\x20y1=\x220%\x22\x20y2=\x2252.643%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#FFF\x22\x20stop-opacity=\x22.9\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#FFF\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22red\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#3qp69ujf5a)\x22\x20d=\x22M29.5\x2030\x20H249\x20V98\x20H28.5\x20z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2276.26\x22\x20y=\x2270.39\x22>attendere</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#1mp2zr6y1b)\x22\x20d=\x22M249\x2098\x20H279\x20V128\x20H249\x20z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20fill-opacity=\x22.9\x22\x20d=\x22M229\x2030\x20H249\x20V50\x20H229\x20z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20d=\x22M0\x200H30V30H0z\x22/>' + '\x20\x20\x20\x20</g>' + '</svg>';
        $Widget['call'](this, _0x1094b8),
        this['_className'] = 'BannerCaricamento',
        this['_visible'] = ![],
        this['_bounds'] = {
            'left': 0x2da,
            'top': 0x3b8,
            'width': 459.1,
            'height': 0x80
        };
    }
    return _0x326fb3['prototype'] = Object['create']($Widget['prototype']),
    _0x326fb3['prototype']['constructor'] = _0x326fb3,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x326fb3()),
            this['instance'];
        }
    };
}()
  , $BannerReaStreaming = function() {
    var _0x58d45f = 0x39a;
    function _0x1c3533() {
        $Widget['call'](this),
        this['_className'] = 'BannerReaStreaming',
        this['_bounds'] = {
            'left': 0x4da,
            'top': _0x58d45f,
            'width': 0x2a7,
            'height': 0x9e
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x25347a = '<svg\x20id=\x22Livello_1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20viewBox=\x220\x200\x20678.07\x20158\x22><defs><style>.cls-1{fill:url(#Sfumatura_senza_nome);}.cls-1,.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-5{fill:#fff;}.cls-2{fill:#2323f4;}.cls-3{fill:rgba(35,35,244,.9);}.cls-4{fill:url(#Sfumatura_senza_nome_2);}</style><linearGradient\x20id=\x22Sfumatura_senza_nome\x22\x20x1=\x22-617.98\x22\x20y1=\x22614.27\x22\x20x2=\x22-618.98\x22\x20y2=\x22614.27\x22\x20gradientTransform=\x22translate(376989\x2054130)\x20scale(609\x20-88)\x22\x20gradientUnits=\x22userSpaceOnUse\x22><stop\x20offset=\x220\x22\x20stop-color=\x22#000063\x22/><stop\x20offset=\x221\x22\x20stop-color=\x22#000098\x22/></linearGradient><linearGradient\x20id=\x22Sfumatura_senza_nome_2\x22\x20x1=\x22-604.5\x22\x20y1=\x22608.5\x22\x20x2=\x22-603.97\x22\x20y2=\x22607.97\x22\x20gradientTransform=\x22translate(24818.07\x2024458)\x20scale(40\x20-40)\x22\x20gradientUnits=\x22userSpaceOnUse\x22><stop\x20offset=\x220\x22\x20stop-color=\x22#fff\x22\x20stop-opacity=\x22.9\x22/><stop\x20offset=\x221\x22\x20stop-color=\x22#fff\x22/></linearGradient></defs><path\x20class=\x22cls-1\x22\x20d=\x22M29,30H638V118H29V30Z\x22/><path\x20class=\x22cls-4\x22\x20d=\x22M638.07,118h40v40h-40v-40Z\x22/><path\x20class=\x22cls-3\x22\x20d=\x22M608,30h30v30h-30V30Z\x22/><path\x20class=\x22cls-2\x22\x20d=\x22M0,0H29V30H0V0Z\x22/><g><path\x20class=\x22cls-5\x22\x20d=\x22M78.39,85.63v-26.03h9.58c1.9,0,3.59,.33,5.09,.98,1.5,.65,2.69,1.62,3.56,2.89,.87,1.27,1.3,2.83,1.3,4.66,0,1.73-.38,3.2-1.15,4.43-.77,1.22-1.84,2.16-3.23,2.81-1.39,.65-3.02,.97-4.89,.97h-4.97v9.29h-5.29Zm5.24-13.36h4.88c1.32,0,2.4-.42,3.24-1.27s1.26-1.89,1.26-3.14-.44-2.32-1.33-3.09c-.89-.76-1.97-1.14-3.24-1.14h-4.81v8.64Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M99.67,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49,.55-.71,1.21-1.27,1.99-1.67,.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.91-.05-2.65,.09s-1.33,.39-1.78,.74c-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M120.64,85.99c-1.82,0-3.41-.39-4.76-1.17s-2.39-1.88-3.13-3.31c-.74-1.43-1.11-3.12-1.11-5.08s.37-3.67,1.11-5.13c.74-1.46,1.78-2.6,3.13-3.42,1.35-.82,2.94-1.22,4.78-1.22s3.43,.4,4.77,1.2c1.34,.8,2.38,1.93,3.11,3.39s1.1,3.19,1.1,5.18c0,1.87-.36,3.53-1.07,4.96-.71,1.43-1.74,2.56-3.08,3.38-1.34,.82-2.96,1.22-4.85,1.22Zm.02-3.91c.92,0,1.67-.27,2.23-.81,.56-.54,.97-1.25,1.23-2.13,.26-.88,.39-1.85,.39-2.89,0-.98-.12-1.91-.35-2.79-.23-.88-.63-1.58-1.2-2.12s-1.33-.81-2.3-.81-1.67,.26-2.24,.77c-.57,.51-.99,1.2-1.25,2.07-.26,.87-.4,1.83-.4,2.89,0,.97,.12,1.91,.36,2.8,.24,.89,.64,1.62,1.21,2.19s1.34,.85,2.32,.85Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M139.95,91.79c-3.31,0-5.83-.42-7.55-1.26-1.72-.84-2.58-1.94-2.58-3.31,0-.64,.17-1.17,.5-1.6,.34-.43,.73-.78,1.18-1.04,.45-.26,.86-.46,1.24-.59s.61-.23,.69-.28c-.19-.11-.47-.27-.83-.48-.36-.21-.69-.5-1-.86-.31-.37-.46-.84-.46-1.43,0-.66,.31-1.27,.95-1.84,.63-.56,1.59-.95,2.87-1.17-1.22-.58-2.15-1.36-2.79-2.34-.64-.98-.95-1.99-.95-3.02,0-1.22,.38-2.27,1.15-3.15s1.81-1.54,3.14-2c1.33-.46,2.83-.68,4.51-.68,1.28,0,2.33,.13,3.15,.4,.82,.27,1.57,.62,2.27,1.05,.28-.11,.64-.25,1.1-.42,.46-.17,.95-.37,1.48-.58,.53-.21,1.04-.42,1.55-.63s.95-.4,1.35-.57l-.02,4.07-3.22,.52c.13,.32,.23,.67,.31,1.04,.07,.37,.11,.68,.11,.92,0,1.08-.31,2.09-.94,3.02s-1.57,1.69-2.83,2.27-2.81,.86-4.65,.86c-.23,0-.53,0-.91-.02-.38-.01-.69-.03-.93-.05-.71,.04-1.19,.13-1.46,.27-.26,.14-.4,.31-.4,.5,0,.29,.27,.48,.81,.57,.54,.09,1.36,.17,2.45,.24,.38,.02,.92,.05,1.6,.09,.68,.04,1.44,.08,2.27,.14,2.28,.16,3.98,.72,5.1,1.68,1.12,.97,1.68,2.18,1.68,3.65,0,1.74-.83,3.18-2.48,4.31s-4.14,1.7-7.46,1.7Zm.85-2.93c1.46,0,2.51-.18,3.13-.54,.62-.36,.94-.88,.94-1.55,0-.56-.24-1.02-.72-1.38-.48-.35-1.18-.56-2.11-.62l-4.27-.29c-.55-.02-1.04,.06-1.47,.25-.43,.19-.76,.46-.99,.79-.23,.34-.35,.7-.35,1.08,0,.78,.47,1.35,1.42,1.71,.95,.36,2.42,.54,4.41,.54Zm-.99-13.09c1,0,1.8-.27,2.4-.82,.61-.55,.91-1.29,.91-2.22s-.3-1.75-.91-2.34c-.61-.59-1.41-.88-2.4-.88s-1.79,.29-2.4,.88c-.62,.59-.93,1.37-.93,2.34s.3,1.66,.89,2.21c.59,.55,1.41,.83,2.44,.83Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M152.39,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49,.55-.71,1.21-1.27,1.99-1.67,.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.91-.05-2.65,.09s-1.33,.39-1.78,.74c-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M170.66,85.99c-1.19,0-2.26-.22-3.2-.67-.95-.44-1.7-1.09-2.25-1.94-.55-.85-.83-1.87-.83-3.09,0-2.04,.76-3.59,2.29-4.65s3.93-1.61,7.22-1.65l2.32-.04v-1.12c0-.85-.25-1.51-.75-1.97s-1.27-.69-2.31-.67c-.77,.01-1.5,.19-2.19,.54-.69,.35-1.16,.95-1.41,1.82h-4.37c.07-1.34,.46-2.45,1.17-3.32,.71-.87,1.67-1.52,2.89-1.94,1.22-.43,2.6-.64,4.15-.64,1.91,0,3.44,.24,4.59,.71,1.15,.47,1.99,1.15,2.5,2.03,.52,.88,.77,1.93,.77,3.14v13.09h-4.39l-.43-3.2c-.64,1.34-1.43,2.27-2.39,2.79-.95,.52-2.08,.77-3.38,.77Zm1.76-3.46c.48,0,.94-.09,1.4-.26,.45-.17,.85-.41,1.21-.7,.35-.29,.64-.63,.85-1,.22-.37,.32-.76,.32-1.15v-2.75l-1.89,.04c-.88,.01-1.69,.12-2.45,.32-.76,.2-1.37,.52-1.83,.96s-.69,1.04-.69,1.8c0,.86,.3,1.54,.9,2.02,.6,.49,1.33,.73,2.18,.73Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M184.36,85.63v-18.61h5.15v2.63c.56-.82,1.32-1.52,2.28-2.11,.95-.59,2.16-.88,3.61-.88,.64,0,1.28,.11,1.94,.34,.66,.23,1.28,.56,1.86,1s1.05,.99,1.41,1.65c.6-.85,1.39-1.56,2.37-2.13,.98-.57,2.07-.85,3.27-.85,.7,0,1.4,.11,2.11,.34s1.37,.6,1.97,1.12c.6,.52,1.08,1.2,1.45,2.06,.37,.86,.55,1.92,.55,3.18v12.28h-5.26v-11.63c0-.74-.15-1.34-.44-1.79-.29-.45-.67-.77-1.12-.97-.45-.2-.93-.3-1.43-.3-.47,0-.94,.09-1.42,.28-.48,.19-.89,.48-1.22,.89-.34,.41-.5,.94-.5,1.6v11.92h-5.24v-12.1c0-.56-.15-1.04-.45-1.42-.3-.38-.68-.67-1.12-.87-.45-.2-.91-.3-1.38-.3s-.96,.1-1.44,.3c-.48,.2-.88,.5-1.21,.92-.32,.41-.49,.93-.49,1.56v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M215.05,85.63v-18.61h5.15v2.63c.56-.82,1.32-1.52,2.28-2.11,.95-.59,2.16-.88,3.61-.88,.64,0,1.28,.11,1.94,.34,.66,.23,1.28,.56,1.86,1s1.05,.99,1.41,1.65c.6-.85,1.39-1.56,2.37-2.13,.98-.57,2.07-.85,3.27-.85,.7,0,1.4,.11,2.11,.34s1.37,.6,1.97,1.12c.6,.52,1.08,1.2,1.45,2.06,.37,.86,.55,1.92,.55,3.18v12.28h-5.26v-11.63c0-.74-.15-1.34-.44-1.79-.29-.45-.67-.77-1.12-.97-.45-.2-.93-.3-1.43-.3-.47,0-.94,.09-1.42,.28-.48,.19-.89,.48-1.22,.89-.34,.41-.5,.94-.5,1.6v11.92h-5.24v-12.1c0-.56-.15-1.04-.45-1.42-.3-.38-.68-.67-1.12-.87-.45-.2-.91-.3-1.38-.3s-.96,.1-1.44,.3c-.48,.2-.88,.5-1.21,.92-.32,.41-.49,.93-.49,1.56v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M251.01,85.99c-1.19,0-2.26-.22-3.2-.67-.95-.44-1.7-1.09-2.25-1.94-.55-.85-.83-1.87-.83-3.09,0-2.04,.76-3.59,2.29-4.65s3.93-1.61,7.22-1.65l2.32-.04v-1.12c0-.85-.25-1.51-.75-1.97s-1.27-.69-2.31-.67c-.77,.01-1.5,.19-2.19,.54-.69,.35-1.16,.95-1.41,1.82h-4.37c.07-1.34,.46-2.45,1.17-3.32,.71-.87,1.67-1.52,2.89-1.94,1.22-.43,2.6-.64,4.15-.64,1.91,0,3.44,.24,4.59,.71,1.15,.47,1.99,1.15,2.5,2.03,.52,.88,.77,1.93,.77,3.14v13.09h-4.39l-.43-3.2c-.64,1.34-1.43,2.27-2.39,2.79-.95,.52-2.08,.77-3.38,.77Zm1.76-3.46c.48,0,.94-.09,1.4-.26,.45-.17,.85-.41,1.21-.7,.35-.29,.64-.63,.85-1,.22-.37,.32-.76,.32-1.15v-2.75l-1.89,.04c-.88,.01-1.69,.12-2.45,.32-.76,.2-1.37,.52-1.83,.96s-.69,1.04-.69,1.8c0,.86,.3,1.54,.9,2.02,.6,.49,1.33,.73,2.18,.73Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M270.79,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49,.55-.71,1.21-1.27,1.99-1.67,.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.91-.05-2.65,.09s-1.33,.39-1.78,.74c-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M289.22,59.62v4.73h-5.11v-4.73h5.11Zm-.05,7.4v18.61h-5.02v-18.61h5.02Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M300.37,66.66c1.56,0,2.91,.32,4.04,.95,1.13,.64,2.03,1.49,2.68,2.57,.65,1.08,1.03,2.29,1.12,3.62h-4.37c-.08-.49-.26-.98-.52-1.47-.26-.49-.64-.89-1.12-1.21-.48-.32-1.08-.48-1.8-.48-1.22,0-2.22,.47-2.98,1.41-.76,.94-1.14,2.37-1.14,4.29,0,1.81,.37,3.25,1.12,4.31,.74,1.06,1.78,1.59,3.11,1.59,.71,0,1.3-.17,1.77-.52,.47-.35,.84-.76,1.11-1.25,.26-.49,.43-.94,.5-1.36h4.27c-.08,1.28-.46,2.44-1.12,3.48s-1.56,1.86-2.69,2.47c-1.13,.61-2.46,.91-3.99,.91-1.73,0-3.27-.38-4.63-1.15-1.36-.77-2.42-1.87-3.2-3.3s-1.16-3.15-1.16-5.14,.37-3.61,1.12-5.08c.74-1.46,1.79-2.61,3.14-3.43,1.35-.82,2.92-1.23,4.73-1.23Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M314.6,77.53c-.01,.95,.14,1.77,.45,2.47,.31,.7,.77,1.24,1.36,1.62,.59,.38,1.31,.57,2.15,.57,.9,0,1.69-.19,2.37-.58,.68-.38,1.15-1.01,1.41-1.89h4.73c-.2,1.32-.73,2.45-1.57,3.38-.85,.94-1.87,1.65-3.07,2.14-1.2,.49-2.45,.74-3.74,.74-1.84,0-3.45-.39-4.85-1.16-1.4-.77-2.49-1.87-3.27-3.29-.78-1.42-1.17-3.08-1.17-5s.35-3.54,1.06-5.03c.71-1.49,1.74-2.68,3.09-3.55s2.97-1.31,4.87-1.31,3.49,.4,4.78,1.2c1.29,.8,2.26,1.91,2.92,3.33,.65,1.42,.98,3.06,.98,4.92v1.42h-12.49Zm-.02-3.13h7.6c0-.74-.14-1.43-.41-2.05-.28-.62-.69-1.12-1.25-1.48-.56-.36-1.26-.54-2.1-.54s-1.51,.19-2.08,.58c-.57,.39-1.01,.9-1.31,1.52s-.45,1.28-.45,1.96Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M344.46,67.02l-6.98,18.61h-3.8l-7-18.61h4.75l4.07,11.86h.14l4.01-11.86h4.81Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M352.49,85.99c-.86,0-1.71-.13-2.55-.4-.83-.26-1.59-.65-2.28-1.17-.68-.52-1.23-1.15-1.65-1.91-.41-.76-.62-1.63-.62-2.63v-12.87h5.26v12.2c0,.86,.28,1.57,.85,2.12,.56,.55,1.39,.83,2.48,.83,1.03,0,1.85-.27,2.46-.8,.61-.53,.91-1.28,.91-2.24v-12.11h5.2v18.61h-3.96l-.61-3.69c-.21,1.09-.62,1.93-1.21,2.51s-1.27,.98-2.03,1.21c-.76,.22-1.51,.33-2.24,.33Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M376.61,70.67h-4.14l.04,9.92c0,.46,.06,.79,.17,1.02,.11,.22,.29,.37,.54,.43,.25,.07,.56,.1,.94,.1h2.5v3.24c-.24,.11-.61,.21-1.12,.31-.51,.1-1.22,.14-2.13,.14-1.63,0-2.89-.21-3.79-.63-.89-.42-1.51-1.01-1.86-1.76-.35-.76-.52-1.63-.52-2.63v-10.13h-3.02v-3.65h3.2l1.31-5.62h3.74v5.6h4.14v3.67Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M386.31,85.99c-1.82,0-3.41-.39-4.76-1.17-1.35-.78-2.39-1.88-3.13-3.31-.74-1.43-1.11-3.12-1.11-5.08s.37-3.67,1.11-5.13c.74-1.46,1.78-2.6,3.13-3.42,1.35-.82,2.94-1.22,4.78-1.22s3.43,.4,4.77,1.2c1.34,.8,2.38,1.93,3.11,3.39,.73,1.46,1.1,3.19,1.1,5.18,0,1.87-.36,3.53-1.07,4.96-.71,1.43-1.74,2.56-3.08,3.38-1.34,.82-2.96,1.22-4.85,1.22Zm.02-3.91c.92,0,1.67-.27,2.23-.81,.56-.54,.97-1.25,1.23-2.13,.26-.88,.39-1.85,.39-2.89,0-.98-.12-1.91-.35-2.79-.23-.88-.63-1.58-1.2-2.12-.56-.54-1.33-.81-2.3-.81s-1.67,.26-2.24,.77c-.57,.51-.99,1.2-1.25,2.07-.26,.87-.4,1.83-.4,2.89,0,.97,.12,1.91,.36,2.8,.24,.89,.64,1.62,1.21,2.19,.56,.56,1.34,.85,2.32,.85Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M419.13,67.02l-6.98,18.61h-3.8l-7-18.61h4.75l4.07,11.86h.14l4.01-11.86h4.81Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M425.64,59.62v4.73h-5.11v-4.73h5.11Zm-.05,7.4v18.61h-5.02v-18.61h5.02Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M434.21,85.99c-1.19,0-2.26-.22-3.2-.67-.95-.44-1.7-1.09-2.25-1.94-.55-.85-.83-1.87-.83-3.09,0-2.04,.76-3.59,2.29-4.65,1.52-1.06,3.93-1.61,7.22-1.65l2.32-.04v-1.12c0-.85-.25-1.51-.75-1.97-.5-.46-1.27-.69-2.31-.67-.77,.01-1.5,.19-2.19,.54-.69,.35-1.16,.95-1.41,1.82h-4.37c.07-1.34,.46-2.45,1.17-3.32,.71-.87,1.67-1.52,2.89-1.94,1.22-.43,2.6-.64,4.15-.64,1.91,0,3.44,.24,4.59,.71,1.15,.47,1.99,1.15,2.5,2.03s.77,1.93,.77,3.14v13.09h-4.39l-.43-3.2c-.64,1.34-1.43,2.27-2.38,2.79-.95,.52-2.08,.77-3.38,.77Zm1.76-3.46c.48,0,.95-.09,1.39-.26,.45-.17,.85-.41,1.21-.7,.35-.29,.64-.63,.86-1s.32-.76,.32-1.15v-2.75l-1.89,.04c-.88,.01-1.69,.12-2.45,.32-.76,.2-1.37,.52-1.83,.96s-.69,1.04-.69,1.8c0,.86,.3,1.54,.9,2.02,.6,.49,1.33,.73,2.18,.73Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M459.34,59.62v4.73h-5.11v-4.73h5.11Zm-.05,7.4v18.61h-5.02v-18.61h5.02Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M462.61,85.63v-18.61h5.17v2.63c.29-.46,.66-.9,1.12-1.32,.46-.43,1.05-.78,1.75-1.05s1.55-.41,2.52-.41c1.14,0,2.21,.22,3.19,.67,.99,.44,1.79,1.14,2.4,2.1,.61,.95,.92,2.2,.92,3.74v12.28h-5.26v-11.63c0-1.01-.3-1.76-.9-2.27-.6-.5-1.33-.76-2.2-.76-.58,0-1.13,.1-1.67,.31-.53,.2-.97,.51-1.31,.92-.34,.41-.5,.91-.5,1.51v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M492.92,70.67h-4.14l.04,9.92c0,.46,.06,.79,.17,1.02,.11,.22,.29,.37,.54,.43,.25,.07,.56,.1,.94,.1h2.5v3.24c-.24,.11-.61,.21-1.12,.31-.51,.1-1.22,.14-2.13,.14-1.63,0-2.89-.21-3.79-.63-.89-.42-1.51-1.01-1.86-1.76-.35-.76-.52-1.63-.52-2.63v-10.13h-3.02v-3.65h3.2l1.31-5.62h3.74v5.6h4.14v3.67Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M498.96,77.53c-.01,.95,.14,1.77,.45,2.47,.31,.7,.77,1.24,1.36,1.62s1.31,.57,2.15,.57c.9,0,1.69-.19,2.37-.58,.68-.38,1.15-1.01,1.41-1.89h4.73c-.2,1.32-.73,2.45-1.58,3.38-.85,.94-1.87,1.65-3.07,2.14-1.2,.49-2.45,.74-3.74,.74-1.84,0-3.45-.39-4.85-1.16-1.4-.77-2.49-1.87-3.27-3.29s-1.17-3.08-1.17-5,.35-3.54,1.06-5.03,1.74-2.68,3.09-3.55c1.35-.87,2.97-1.31,4.87-1.31s3.49,.4,4.78,1.2,2.26,1.91,2.92,3.33c.65,1.42,.98,3.06,.98,4.92v1.42h-12.49Zm-.02-3.13h7.6c0-.74-.14-1.43-.41-2.05-.28-.62-.69-1.12-1.25-1.48-.56-.36-1.26-.54-2.1-.54s-1.51,.19-2.08,.58c-.57,.39-1,.9-1.3,1.52s-.45,1.28-.45,1.96Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M513.55,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49s1.21-1.27,1.99-1.67c.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.92-.05-2.65,.09-.73,.14-1.33,.39-1.78,.74-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M526.64,85.63v-18.61h5.17v2.63c.29-.46,.66-.9,1.12-1.32,.46-.43,1.05-.78,1.75-1.05s1.55-.41,2.52-.41c1.14,0,2.21,.22,3.19,.67,.99,.44,1.79,1.14,2.4,2.1,.61,.95,.92,2.2,.92,3.74v12.28h-5.26v-11.63c0-1.01-.3-1.76-.9-2.27-.6-.5-1.33-.76-2.2-.76-.58,0-1.13,.1-1.67,.31-.53,.2-.97,.51-1.31,.92-.34,.41-.5,.91-.5,1.51v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M550.76,77.53c-.01,.95,.14,1.77,.45,2.47,.31,.7,.77,1.24,1.36,1.62s1.31,.57,2.15,.57c.9,0,1.69-.19,2.37-.58,.68-.38,1.15-1.01,1.41-1.89h4.73c-.2,1.32-.73,2.45-1.58,3.38-.85,.94-1.87,1.65-3.07,2.14-1.2,.49-2.45,.74-3.74,.74-1.84,0-3.45-.39-4.85-1.16-1.4-.77-2.49-1.87-3.27-3.29s-1.17-3.08-1.17-5,.35-3.54,1.06-5.03,1.74-2.68,3.09-3.55c1.35-.87,2.97-1.31,4.87-1.31s3.49,.4,4.78,1.2,2.26,1.91,2.92,3.33c.65,1.42,.98,3.06,.98,4.92v1.42h-12.49Zm-.02-3.13h7.6c0-.74-.14-1.43-.41-2.05-.28-.62-.69-1.12-1.25-1.48-.56-.36-1.26-.54-2.1-.54s-1.51,.19-2.08,.58c-.57,.39-1,.9-1.3,1.52s-.45,1.28-.45,1.96Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M576.12,70.67h-4.14l.04,9.92c0,.46,.06,.79,.17,1.02,.11,.22,.29,.37,.54,.43,.25,.07,.56,.1,.94,.1h2.5v3.24c-.24,.11-.61,.21-1.12,.31-.51,.1-1.22,.14-2.13,.14-1.63,0-2.89-.21-3.79-.63-.89-.42-1.51-1.01-1.86-1.76-.35-.76-.52-1.63-.52-2.63v-10.13h-3.02v-3.65h3.2l1.31-5.62h3.74v5.6h4.14v3.67Z\x22/></g></svg>'
          , _0x575b48 = new $Widget(_0x25347a);
        this['append'](_0x575b48);
        var _0x2aef4a = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x2aef4a && (_0x2aef4a(),
            _0x2aef4a = undefined);
        }, ![]);
        var _0x32f566 = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x126218) {
                _0x126218 !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x126218 ? 'bannerReaStreamingOn' : 'bannerReaStreamingOff'),
                this['_top'] = _0x126218 ? _0x58d45f : _0x58d45f + 0x20,
                this['_node']['style']['opacity'] = _0x126218 ? 0x1 : 0x0,
                _0x126218 ? _0x32f566 = setTimeout(function() {
                    this['_visible'] = ![];
                }
                ['bind'](this), 0x1388) : clearTimeout(_0x32f566));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x31fc4a, _0xdd31b2) {
            if (_0x2aef4a)
                _0x2aef4a();
            if (TRANSITION)
                _0x2aef4a = _0xdd31b2,
                this['_visible'] = _0x31fc4a;
            else {
                if (_0xdd31b2)
                    _0xdd31b2();
            }
        }
        ;
    }
    return _0x1c3533['prototype'] = Object['create']($Widget['prototype']),
    _0x1c3533['prototype']['constructor'] = _0x1c3533,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x1c3533()),
            this['instance'];
        }
    };
}()
  , $BannerReaBroadcast = function() {
    function _0x48b742() {
        $Widget['call'](this),
        this['_className'] = 'BannerReaBroadcast',
        this['_bounds'] = {
            'left': 0x49e,
            'top': 0x320,
            'width': 0x2e1,
            'height': 0xf4
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x468229 = '<svg\x20width=\x22791\x22\x20height=\x22373\x22\x20viewBox=\x220\x200\x20791\x20373\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a' + '\x20\x20\x20\x20<defs>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20x1=\x2213.323%\x22\x20y1=\x2250%\x22\x20x2=\x22100%\x22\x20y2=\x2250%\x22\x20id=\x22brlk84yqoa\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20stop-color=\x22#003831\x22\x20offset=\x220%\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20stop-color=\x22#002C27\x22\x20offset=\x22100%\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a' + '\x20\x20\x20\x20</defs>\x0a' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#brlk84yqoa)\x22\x20d=\x22M100\x200h599v264H100z\x22\x20transform=\x22translate(.22)\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00EE8E\x22\x20d=\x22M.22\x200h100v100H.22z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<g\x20fill=\x22#003831\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M50.22\x2040a5\x205\x200\x201\x200\x200-10\x205\x205\x200\x200\x200\x200\x2010z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M50.22\x2071c-2.143\x200-3.892-1.558-3.996-3.516l-.005-.185V49.701c0-2.044\x201.791-3.701\x204-3.701\x202.142\x200\x203.891\x201.558\x203.995\x203.516l.005.185v17.598c0\x202.044-1.79\x203.701-4\x203.701z\x22\x20fill-rule=\x22nonzero\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<text\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-size=\x2236\x22\x20font-weight=\x22700\x22\x20letter-spacing=\x22-1.6\x22\x20fill=\x22#FFF\x22\x20transform=\x22translate(.22)\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x22140\x22\x20y=\x2274\x22>Sei\x20tornato\x20alla\x20diretta\x20</tspan>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x22140\x22\x20y=\x22120\x22>predefinita</tspan>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#34E98E\x22\x20d=\x22m743.054\x20223.439\x2047.384\x20101.616-101.616\x2047.384-47.384-101.616z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00B56C\x22\x20d=\x22m715.938\x20258.34\x2039.598\x2039.598-39.598\x2039.598-39.598-39.598z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a' + '\x20\x20\x20\x20</g>\x0a' + '</svg>'
          , _0x18c9c5 = new $Widget(_0x468229);
        this['append'](_0x18c9c5);
        var _0x21e0c7 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x21e0c7 && (_0x21e0c7(),
            _0x21e0c7 = undefined);
        }, ![]);
        var _0x1c241c = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x37a64a) {
                _0x37a64a !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x37a64a ? 'bannerReaStreamingOn' : 'bannerReaStreamingOff'),
                this['_top'] = _0x37a64a ? 0x320 : 0x340,
                this['_node']['style']['opacity'] = _0x37a64a ? 0x1 : 0x0,
                _0x37a64a ? _0x1c241c = setTimeout(function() {
                    this['_visible'] = ![];
                }
                ['bind'](this), 0x1388) : clearTimeout(_0x1c241c));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x2fad03, _0x219d98) {
            if (_0x21e0c7)
                _0x21e0c7();
            if (TRANSITION)
                _0x21e0c7 = _0x219d98,
                this['_visible'] = _0x2fad03;
            else {
                if (_0x219d98)
                    _0x219d98();
            }
        }
        ;
    }
    return _0x48b742['prototype'] = Object['create']($Widget['prototype']),
    _0x48b742['prototype']['constructor'] = _0x48b742,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x48b742()),
            this['instance'];
        }
    };
}()
  , $SimpleBanner = function() {
    function _0x16d894() {
        var _0x562227 = '<div><div\x20style=\x22position:\x20relative;\x20left:\x2050%;\x20transform:\x20translateX(-50%);\x20width:\x20330px;\x20height:\x20128px;\x22>' + '<div\x20style=\x22position:\x20absolute;\x20width:\x2032px;\x20height:\x2032px;\x20background-color:\x20#2323F4\x22></div>' + '<div\x20style=\x22position:\x20absolute;\x20top:\x2032px;\x20left:\x2032px;\x20right:\x2032px;\x20height:\x2064px;\x20background:\x20linear-gradient(to\x20left,\x20#000063,\x20#000098)\x22>' + '<div\x20style=\x22position:\x20absolute;\x20right:\x200;\x20width:\x2016px;\x20height:\x2016px;\x20background-color:\x20#2323F4\x22></div>' + '<div\x20id=\x22_010_sb_txt\x22\x20style=\x22position:\x20absolute;\x20font:\x2030px\x20PublicSans-Regular;\x20width:\x20100%;\x20min-width:\x20256px;\x20height:\x2064px;\x20line-height:\x2064px;\x20' + 'color:\x20#ffffff;\x20text-align:\x20center;\x22>...</div>' + '</div>' + '<div\x20style=\x22position:\x20absolute;\x20right:\x200;\x20bottom:\x200;\x20width:\x2032px;\x20height:\x2032px;\x20background-color:\x20#ffffff\x22></div>' + '</div></div>', _0x3eddf7 = {}, _0xe4764d;
        $Widget['call'](this, _0x562227),
        this['_bounds'] = {
            'left': 0x40,
            'top': 0x3b8,
            'width': 0x700,
            'height': 0x80
        };
        function _0x36b895() {
            var _0x5348cf = document['getElementById']('mainFrame');
            _0x5348cf['appendChild'](this['_node']);
        }
        this['setText'] = function(_0x2a620f) {
            _0x2a620f = _0x2a620f || '...';
            var _0x2ec227 = _0x3eddf7[_0x2a620f], _0x360f51;
            !_0x2ec227 && (_0x2ec227 = _0x2a620f['width']('30px\x20PublicSans-Regular'),
            _0x3eddf7[_0x2a620f] = _0x2ec227),
            this['_node']['firstChild']['style']['width'] = _0x2ec227 + 0xb4 + 'px',
            _0x360f51 = this['_node']['querySelector']('#_010_sb_txt'),
            _0x360f51['innerHTML'] = _0x2a620f;
        }
        ,
        this['show'] = function(_0x2a45d9, _0x1cc200, _0x58f2aa, _0x28025f) {
            if (!this['_parent'])
                _0x36b895['call'](this);
            _0xe4764d && (clearTimeout(_0xe4764d),
            _0xe4764d = null),
            this['_visible'] = _0x2a45d9,
            this['setText'](_0x1cc200),
            _0x2a45d9 && (_0xe4764d = setTimeout(function() {
                this['_visible'] = ![];
                if (_0x28025f)
                    _0x28025f();
            }
            ['bind'](this), (_0x58f2aa || 0x3) * 0x3e8));
        }
        ;
    }
    return _0x16d894['prototype'] = Object['create']($Widget['prototype']),
    _0x16d894['prototype']['constructor'] = _0x16d894,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x16d894()),
            this['instance'];
        }
    };
}()
  , $Info = function() {
    function _0x26066d() {
        var _0x12ee83 = undefined;
        Object['defineProperty'](this, '_name', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x12ee83;
            },
            'set': function(_0x5e92bb) {
                _0x12ee83 = _0x5e92bb;
            }
        });
        var _0x1af9b5 = undefined;
        Object['defineProperty'](this, '_description', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1af9b5;
            },
            'set': function(_0x2b01b1) {
                _0x1af9b5 = _0x2b01b1;
            }
        });
        var _0x427318 = undefined;
        Object['defineProperty'](this, '_startTime', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x427318;
            },
            'set': function(_0x253f63) {
                _0x427318 = _0x253f63;
            }
        });
        var _0x5aeee7 = undefined;
        Object['defineProperty'](this, '_duration', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5aeee7;
            },
            'set': function(_0x429214) {
                _0x5aeee7 = _0x429214;
            }
        }),
        Object['defineProperty'](this, '_expired', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (this['_startTime'] && this['_duration'])
                    return new Date()['getTime']() >= this['_startTime'] + this['_duration'];
                else
                    return !![];
            }
        });
        var _0x4f3cd1 = undefined;
        Object['defineProperty'](this, '_imageUrl', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4f3cd1;
            },
            'set': function(_0x40c5d9) {
                _0x4f3cd1 = _0x40c5d9;
            }
        }),
        Object['defineProperty'](this, '_hhmmStartString', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x56009a = new Date(_0x427318)
                  , _0x3da86c = _0x56009a['getHours']()
                  , _0x34782f = _0x56009a['getMinutes']();
                return (_0x3da86c < 0xa ? '0' : '') + _0x3da86c + ':' + (_0x34782f < 0xa ? '0' : '') + _0x34782f;
            }
        }),
        Object['defineProperty'](this, '_mmDurationString', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x30b235 = Math['floor'](_0x5aeee7 / 0x3e8 / 0x3c);
                return _0x30b235 + '\x20min';
            }
        });
    }
    return _0x26066d['prototype']['constructor'] = _0x26066d,
    _0x26066d;
}()
  , $RaiPlayEpgLoader = function() {
    function _0x2827f0(_0xa62f53) {
        var _0x836e7f = 'https://www.raiplay.it';
        function _0x4e8468(_0x58c7ef, _0x3ae8ce, _0x347bff) {
            var _0x220646;
            switch (_0x58c7ef['type']) {
            case 'RaiPlay\x20Programma\x20Item':
            case 'RaiPlay\x20Raccolta\x20Item':
                _0x220646 = new $Info(),
                _0x220646['_position'] = _0x347bff || 0x0,
                _0x220646['_name'] = _0x58c7ef['name'],
                _0x220646['_description'] = '',
                _0x220646['_pathId'] = _0x58c7ef['_path_id'],
                _0x220646['_type'] = _0x58c7ef['_type'];
                var _0x55ace1 = _0x58c7ef['images'] && (_0x58c7ef['images']['portrait_logo'] || _0x58c7ef['images']['portrait43']);
                _0x220646['_imageUrl'] = _0x55ace1 ? 'https://www.raiplay.it/resizegd/-x146' + _0x55ace1 : '';
                if (_0x3ae8ce)
                    _0x3ae8ce(_0x220646);
                break;
            case 'RaiPlay\x20Video\x20Item':
                _0x220646 = new $Info(),
                _0x220646['_position'] = _0x58c7ef['_order'],
                _0x220646['_name'] = _0x58c7ef['program_info'] ? _0x58c7ef['program_info']['name'] : _0x58c7ef['program_name'],
                _0x220646['_description'] = _0x58c7ef['program_info'] ? _0x58c7ef['program_info']['vanity'] : _0x58c7ef['episode_title'],
                _0x220646['_videoUrl'] = _0x58c7ef['video'] ? _0x58c7ef['video']['content_url'] : _0x58c7ef['video_url'],
                _0x220646['_duration'] = _0x58c7ef['video'] ? _0x58c7ef['video']['duration'] : _0x58c7ef['video_url'],
                _0x220646['_pathId'] = _0x58c7ef['_path_id'],
                _0x220646['_type'] = _0x58c7ef['_type'],
                _0x220646['_imageUrl'] = '';
                for (var _0x232ca0 = _0x58c7ef['images'], _0x58ffa1 = Object['keys'](_0x232ca0), _0x30044a = 0x0; _0x30044a < _0x58ffa1['length']; _0x30044a++) {
                    if (_0x232ca0[_0x58ffa1[_0x30044a]] !== '') {
                        _0x220646['_imageUrl'] = 'https://www.raiplay.it/resizegd/-x146' + _0x232ca0[_0x58ffa1[_0x30044a]];
                        break;
                    }
                }
                if (_0x3ae8ce)
                    _0x3ae8ce(_0x220646);
                break;
            default:
                println('[RaiPlayEpgLoader2.createInfoItem]\x20Unable\x20to\x20treat\x20' + _0x58c7ef['type'] + '\x20item\x20type.\x20Skip', 'wrn');
                _0x3ae8ce && _0x3ae8ce();
            }
        }
        function _0x263dc8(_0x1a2ac2, _0x25ce77) {
            switch (_0x1a2ac2['type']) {
            case 'RaiPlay\x20Slider\x20Block':
                function _0x4ff249() {
                    if (RAIPLAY_EPG['_infoArray'])
                        RAIPLAY_EPG['_infoArray']['sort'](function(_0x4639ea, _0x79af7d) {
                            return _0x4639ea['_position'] - _0x79af7d['_position'];
                        });
                    else
                        RAIPLAY_EPG['_infoArray'] = undefined;
                    RAIPLAY_EPG['_name'] = _0x1a2ac2['name'];
                    if (_0x25ce77)
                        _0x25ce77();
                }
                var _0x563c53 = new $PendingTaskSentry(_0x1a2ac2['contents']['length'],[_0x4ff249],'raiPlayEpg');
                for (var _0x4f40ed = 0x0; _0x4f40ed < _0x1a2ac2['contents']['length']; _0x4f40ed++) {
                    _0x1a2ac2['contents'][_0x4f40ed]['_order'] = _0x4f40ed,
                    _0x1a2ac2['contents'][_0x4f40ed]['_path_id'] = _0x1a2ac2['contents'][_0x4f40ed]['path_id'],
                    _0x1a2ac2['contents'][_0x4f40ed]['_type'] = _0x1a2ac2['contents'][_0x4f40ed]['type'],
                    _0x4e8468(_0x1a2ac2['contents'][_0x4f40ed], function(_0x5b30f6) {
                        _0x5b30f6 && (_0x5b30f6['_description'] = _0x1a2ac2['name'],
                        RAIPLAY_EPG['_infoArray']['push'](_0x5b30f6)),
                        _0x563c53['accomplishedTask']();
                    }, _0x4f40ed);
                }
                break;
            default:
                println('RaiPlayEpgLoader2:\x20unable\x20to\x20parse\x20Block' + _0x1a2ac2['type'], 'err');
                break;
            }
        }
        function _0x48cc8f(_0x56be6f) {
            RAIPLAY_EPG['_infoArray'] = [];
            var _0x24b9d2 = _0x836e7f + '/home/PublishingBlock-4c05b30f-e524-49db-a39a-7a1544288ac8.json?time=' + new Date()['getTime']();
            $Net['http'](_0x24b9d2)['get']({
                'resolve': function(_0x2d4ff7) {
                    if (!_0x2d4ff7['errorFlag']) {
                        var _0x130cc7 = $MISC['jsonParse'](_0x2d4ff7['text'], 'RaiPlayEpgLoader');
                        _0x130cc7 && _0x130cc7['contents'] && _0x130cc7['contents']['length'] ? _0x263dc8(_0x130cc7, _0x56be6f) : _0x56be6f();
                    } else
                        println(_0x2d4ff7, 'err'),
                        _0x56be6f && _0x56be6f();
                },
                'reject': function(_0x18a09b) {
                    println(_0x18a09b, 'err'),
                    _0x56be6f && _0x56be6f();
                }
            });
        }
        _0x48cc8f(_0xa62f53);
    }
    return _0x2827f0['prototype']['constructor'] = _0x2827f0,
    _0x2827f0;
}()
  , $RaiPlayEpgIgnitor = function() {
    function _0x727978(_0x354291) {
        RAIPLAY_EPG = {},
        new $RaiPlayEpgLoader(_0x20edb8);
        function _0x20edb8() {
            _0x354291();
        }
    }
    return _0x727978['prototype']['constructor'] = _0x727978,
    _0x727978;
}()
  , $TgEpgIgnitor = function() {
    function _0x15e9ea(_0x4ef0ed) {
        var _0x340e6c = $StorageManager['getInstance']()['read'](TGR_RANKING_FILE), _0x10250d;
        !_0x340e6c ? (_0x10250d = {},
        $StorageManager['getInstance']()['write'](TGR_RANKING_FILE, JSON['stringify'](_0x10250d))) : _0x10250d = $MISC['jsonParse'](_0x340e6c, 'tgEpg[A]');
        var _0x2696e5 = {
            'Abruzzo': 'abruzzo',
            'Basilicata': 'basilicata',
            'Calabria': 'calabria',
            'Campania': 'campania',
            'Emilia\x20Romagna': 'emilia',
            'Friuli\x20Venezia\x20Giulia': 'friuli',
            'Lazio': 'lazio',
            'Liguria': 'liguria',
            'Lombardia': 'lombardia',
            'Marche': 'marche',
            'Molise': 'molise',
            'Piemonte': 'piemonte',
            'Puglia': 'puglia',
            'Sardegna': 'sardegna',
            'Sicilia': 'sicilia',
            'Toscana': 'toscana',
            'Trento': 'trnt',
            'Umbria': 'umbria',
            'Valle\x20d\x27Aosta': 'valleaosta',
            'Veneto': 'veneto',
            'Tagesschau': 'trntTagesschau',
            'Trail': 'trntTrail',
            'Furlanija\x20Julijska\x20krajina': 'furlanija',
            'Bolzano': 'trntBolzano'
        };
        TG_EPG = {
            'Nation': {},
            'Region': {}
        },
        TG_EPG['Region']['imageUrl'] = 'resources/images/TG/tgrThmb.png';
        function _0x447f9b(_0x2eacc0, _0x531752) {
            if (_0x2eacc0['ranking'] > _0x531752['ranking'])
                return -0x1;
            else {
                if (_0x531752['ranking'] > _0x2eacc0['ranking'])
                    return 0x1;
                else
                    return _0x36a0d0(_0x2eacc0, _0x531752);
            }
        }
        function _0x36a0d0(_0x23d026, _0x5ab750) {
            var _0x1a798e = _0x23d026['sortName'] || _0x23d026['name']
              , _0x368a17 = _0x5ab750['sortName'] || _0x5ab750['name'];
            if (_0x1a798e > _0x368a17)
                return 0x1;
            else {
                if (_0x368a17 > _0x1a798e)
                    return -0x1;
                else
                    return 0x0;
            }
        }
        function _0x453bd0(_0x8a3427, _0x184e84, _0x506d38) {
            return {
                'name': _0x506d38,
                'latest': {
                    'date': _0x8a3427['latest']['date'],
                    'imageUrl': './resources/images/TG/' + _0x184e84 + '.jpg',
                    'label': _0x8a3427['latest']['label'],
                    'mediaUri': _0x8a3427['latest']['mediaUri'],
                    'time': _0x8a3427['latest']['time']
                }
            };
        }
        TG_EPG['Region']['update'] = function(_0xc10a21) {
            TG_EPG['Region']['edition'] = [],
            TG_EPG['Nation']['edition'] = [];
            var _0x459c90 = 'https://www.rainews.it/lastTg.json';
            $Net['http'](_0x459c90)['get']({
                'resolve': function(_0x21e611) {
                    if (!_0x21e611['errorFlag']) {
                        var _0x5cbe47 = $MISC['jsonParse'](_0x21e611['text'], 'tgEpgLoader');
                        if (_0x5cbe47['tg1'])
                            TG_EPG['Nation']['edition']['push'](_0x453bd0(_0x5cbe47['tg1'], 'tg1', 'TG1'));
                        if (_0x5cbe47['tg2'])
                            TG_EPG['Nation']['edition']['push'](_0x453bd0(_0x5cbe47['tg2'], 'tg2', 'TG2'));
                        if (_0x5cbe47['tg3'])
                            TG_EPG['Nation']['edition']['push'](_0x453bd0(_0x5cbe47['tg3'], 'tg3', 'TG3'));
                        var _0x2103d7 = {
                            'Bolzano': 'Trentino\x20Alto\x20Adige\x20-\x20Bolzano',
                            'Trail': 'Trentino\x20Alto\x20Adige\x20-\x20Trail',
                            'Tagesschau': 'Trentino\x20Alto\x20Adige\x20-\x20Tagesschau',
                            'Trento': 'Trentino\x20Alto\x20Adige\x20-\x20Trento',
                            'Furlanija\x20Julijska\x20krajina': 'Friuli\x20Venezia\x20Giulia\x20-\x20TDD'
                        };
                        for (var _0x359969 = 0x0, _0x48ab4f; _0x359969 < _0x5cbe47['tgr']['regions']['length']; _0x359969++) {
                            _0x48ab4f = {
                                'name': _0x5cbe47['tgr']['regions'][_0x359969]['label'],
                                'latest': _0x5cbe47['tgr']['regions'][_0x359969]['latest']
                            },
                            _0x48ab4f['latest']['imageUrl'] = $DataLoader['getInstance']()['getSvgImageUrl'](_0x2696e5[_0x48ab4f['name']]),
                            _0x48ab4f['latest']['label'] = _0x48ab4f['latest']['label']['replace'](/.+ - /gm, ''),
                            _0x48ab4f['sortName'] = _0x2103d7[_0x48ab4f['name']] ? _0x2103d7[_0x48ab4f['name']] : _0x48ab4f['name'];
                            var _0x834d8f = _0x48ab4f['latest']['date']['split']('/');
                            _0x834d8f[0x2] = parseInt(_0x834d8f[0x2]),
                            _0x48ab4f['latest']['date'] = _0x834d8f[0x0] + '/' + _0x834d8f[0x1] + '/' + _0x834d8f[0x2],
                            _0x48ab4f['ranking'] = _0x10250d[_0x48ab4f['name']] ? _0x10250d[_0x48ab4f['name']] : 0x0,
                            TG_EPG['Region']['edition']['push'](_0x48ab4f);
                        }
                        TG_EPG['Region']['edition']['sort'](_0x447f9b);
                        var _0x29c5c4 = TG_EPG['Region']['edition']['slice'](0x0, 0x2)
                          , _0x3e951a = TG_EPG['Region']['edition']['slice'](0x2);
                        _0x3e951a['sort'](_0x36a0d0),
                        TG_EPG['Region']['edition'] = _0x29c5c4['concat'](_0x3e951a);
                        if (_0xc10a21)
                            _0xc10a21();
                    } else {
                        println(_0x21e611, 'err');
                        if (_0xc10a21)
                            _0xc10a21();
                    }
                },
                'reject': function(_0x1de4c7) {
                    println(_0x1de4c7, 'err');
                    if (_0xc10a21)
                        _0xc10a21();
                }
            });
        }
        ,
        TG_EPG['update'] = function(_0x3713e5) {
            function _0x4df682() {
                var _0x64eaba = new $PendingTaskSentry(0x1,[_0xb14c5c],'TG_EPG\x20Update');
                TG_EPG['Region']['update'](_0x64eaba['accomplishedTask']['bind'](null, 'TG_EPG.Region\x20READY'));
                function _0xb14c5c() {
                    if (_0x3713e5)
                        _0x3713e5();
                }
            }
            if (!$DataLoader['getInstance']()['getSvgImageUrl']('piemonte'))
                $DataLoader['getInstance']()['fileInject']('resources/SVG1_20221130_164531.xml', _0x4df682);
            else
                _0x4df682();
        }
        ,
        TG_EPG['update'](_0x4ef0ed);
    }
    return _0x15e9ea['prototype']['constructor'] = _0x15e9ea,
    _0x15e9ea;
}();
